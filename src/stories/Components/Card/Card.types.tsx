import React from "react";

export interface CardProps {
  title: string;
  description: string;
  image?: string;
  footer?: React.ReactNode;
  disabled?: boolean;
}
