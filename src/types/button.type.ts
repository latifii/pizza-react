import { ButtonHTMLAttributes } from "react";
export type Varient = "primary" | "secondary" | "small" | "rounded";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string;
  varient: Varient;
  onClick?: () => void;
};
