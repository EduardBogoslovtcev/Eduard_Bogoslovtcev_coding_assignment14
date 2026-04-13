import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./Table.types";

const StyledCell = styled.td<{ disabled?: boolean }>`
  padding: 0.75rem;
  border: 1px solid #cccccc;
  text-align: left;

  background-color: ${({ disabled }) => (disabled ? "#eeeeee" : "transparent")};
`;

export const TableCell: React.FC<TableCellProps> = ({ children, disabled }) => {
  return <StyledCell disabled={disabled}>{children}</StyledCell>;
};
