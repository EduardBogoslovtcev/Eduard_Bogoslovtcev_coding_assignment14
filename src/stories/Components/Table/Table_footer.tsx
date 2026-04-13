import React from "react";
import styled from "styled-components";
import { TableSectionProps } from "./Table.types";

const StyledFooter = styled.tfoot<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#dddddd" : "#f9f9f9")};
`;

export const TableFooter: React.FC<TableSectionProps> = ({
  children,
  disabled,
}) => {
  return <StyledFooter disabled={disabled}>{children}</StyledFooter>;
};
