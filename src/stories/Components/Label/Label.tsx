import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ color: string; disabled?: boolean }>`
  font-size: 1rem;
  color: ${({ disabled, color }) => (disabled ? "#999999" : color)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text,
  color = "#000000",
  disabled = false,
}) => {
  return (
    <StyledLabel color={color} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};
