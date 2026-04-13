import React from "react";

export interface TableProps {
  children: any;
  disabled?: boolean;
  backgroundColor?: string;
}

export interface TableSectionProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableCellProps {
  children: React.ReactNode;
  disabled?: boolean;
}
