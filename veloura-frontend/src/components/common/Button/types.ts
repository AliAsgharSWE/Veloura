export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "ternary"
    | "toggle-active"
    | "toggle-inactive"
    | "custom";
  size?: "default" | "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}