import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./Radio_button.types";

const Wrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: ${({ disabled }) => (disabled ? "#999999" : "#000000")};
`;

const StyledRadio = styled.input<{ disabled?: boolean }>`
  accent-color: ${({ disabled }) => (disabled ? "#cccccc" : "#007bff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <Wrapper disabled={disabled}>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
      />
      {label}
    </Wrapper>
  );
};
