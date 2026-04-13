import React from "react";
export interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}
