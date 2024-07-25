import { ButtonHTMLAttributes } from "react";
export type Varient = "primary" | "secondary" | "small";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string;
  varient: Varient;
};
