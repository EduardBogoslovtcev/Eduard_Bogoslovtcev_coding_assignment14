import React from "react";
import styled from "styled-components";
import { TableSectionProps } from "./Table.types";

const StyledHeader = styled.thead<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#dddddd" : "#f5f5f5")};
`;

export const TableHeader: React.FC<TableSectionProps> = ({
  children,
  disabled,
}) => {
  return <StyledHeader disabled={disabled}>{children}</StyledHeader>;
};
