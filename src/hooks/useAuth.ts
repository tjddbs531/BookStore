import { useNavigate } from "react-router-dom";
import type { LoginProps } from "../pages/Login";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { login, resetPassword, resetRequest, signup } from "../api/auth.api";
import { useState } from "react";


type EmailOnly = { email: string };
type EmailPassword = { email: string; password: string };
type SignupPayload = { email: string; password: string }; 

export const useAuth = () => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const { storeLogin, storeLogout } = useAuthStore();

  const userLogin = async (data: LoginProps) => {
    try {
      const res = await login(data);
      storeLogin(res.token);
      showAlert("로그인이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      showAlert("로그인에 실패했습니다.");
    }
  };

  const userSignup = async (data: SignupPayload) => {
    try {
      await signup(data);
      showAlert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      showAlert("회원가입에 실패했습니다.");
    }
  };

  const [resetRequested, setResetRequested] = useState(false);

  const userResetRequest = async ({ email }: EmailOnly) => {
    try {
      await resetRequest({ email });
      setResetRequested(true);
      showAlert("초기화 메일을 전송했습니다.");
    } catch (error) {
      showAlert("초기화 요청에 실패했습니다.");
    }
  };

  const userResetPassword = async ({ email, password }: EmailPassword) => {
    try {
      await resetPassword({ email, password });
      showAlert("비밀번호가 초기화되었습니다.");
      navigate("/login");
    } catch (error) {
      showAlert("비밀번호 초기화에 실패했습니다.");
    }
  };

  return {
    userLogin,
    userSignup,
    userResetPassword,
    userResetRequest,
    resetRequested,
  };
};
