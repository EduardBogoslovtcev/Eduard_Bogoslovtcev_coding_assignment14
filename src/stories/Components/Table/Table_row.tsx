import React from "react";
import styled from "styled-components";
import { TableSectionProps } from "./Table.types";

const StyledRow = styled.tr<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const TableRow: React.FC<TableSectionProps> = ({
  children,
  disabled,
}) => {
  return <StyledRow disabled={disabled}>{children}</StyledRow>;
};
