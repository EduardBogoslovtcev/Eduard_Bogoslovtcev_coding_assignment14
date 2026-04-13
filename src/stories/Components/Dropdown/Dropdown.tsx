import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{
  backgroundColor: string;
  disabled?: boolean;
}>`
  padding: 0.6rem 1rem;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  border-radius: 6px;
  border: 1px solid #cccccc;
  width: 100%;

  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#eeeeee" : backgroundColor};

  color: ${({ disabled }) => (disabled ? "#999999" : "#000000")};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  transition: all 0.3s ease;
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  backgroundColor = "#ffffff",
  disabled = false,
  onChange,
}) => {
  return (
    <StyledSelect
      backgroundColor={backgroundColor}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};
