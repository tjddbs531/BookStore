import styled from "styled-components";
import type { ButtonScheme, ButtonSize } from "../../style/theme";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
  isLoading?: boolean;
};

function Button({
  children,
  size,
  scheme,
  disabled,
  isLoading,
  type = "button",    
  ...rest              
}: Props) {
  return (
    <ButtonStyle
      $size={size}      
      $scheme={scheme}
      $isLoading={isLoading}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<{
  $size: ButtonSize;
  $scheme: ButtonScheme;
  $isLoading?: boolean;
}>`
  font-size: ${({ theme, $size }) => theme.button[$size].fontSize};
  padding: ${({ theme, $size }) => theme.button[$size].padding};
  color: ${({ theme, $scheme }) => theme.buttonScheme[$scheme].color};
  background-color: ${({ theme, $scheme }) =>
    theme.buttonScheme[$scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export default Button;
