import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{
  backgroundColor: string;
  disabled?: boolean;
}>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? "#cccccc" : backgroundColor};
  color: white;
  transition: all 0.3s ease;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.85)};
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor = "#007bff",
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </StyledButton>
  );
};
