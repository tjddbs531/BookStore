import { create } from "zustand";

interface StoreState{ 
    isloggedIn : boolean; //로그인 여부를 저장하는 상태
    storeLogin: (token : string) => void; //로그인 처리 함수
    storeLogout: () => void; //로그아웃 처리 함수
}

export const getToken = () => { //저장해 둔 로그인 토큰을 읽어오는 용도
    const token = localStorage.getItem('token');
    return token;
};

const setToken = (token: string) => { //토큰을 저장하는 용도
    localStorage.setItem('token', token);
};

export const removeToken = () => {
    localStorage.removeItem("token"); //토큰을 삭제하는 용도
};

export const useAuthStore = create<StoreState>((set) => ({
    isloggedIn: getToken() ? true : false, //앱이 처음 실행될 때 localStorage에서 토큰을 읽음.
    storeLogin: (token: string) => {  //로그인 시 실행되는 함수.
        set({isloggedIn: true}); //isLoggedIn 상태를 true로 변경.
        setToken(token); //토큰을 저장
    },
    storeLogout: () => { //로그아웃 시 실행되는 함수.
        set({isloggedIn: false}); //isLoggedIn 상태를 false로 변경.
        removeToken(); //토큰 삭제 
    },
}))

//이정도는 외울만하겠다 !!