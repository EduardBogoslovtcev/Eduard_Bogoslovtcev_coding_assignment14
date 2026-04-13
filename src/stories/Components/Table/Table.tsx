import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{
  disabled?: boolean;
  backgroundColor: string;
}>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#eeeeee" : backgroundColor};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  backgroundColor = "#ffffff",
}) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      {children}
    </StyledTable>
  );
};
