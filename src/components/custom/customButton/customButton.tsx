import { Button } from "@heroui/react";
import React, { ReactNode } from "react";

enum CustomCompColor {
  default = "default",
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  danger = "danger",
}

enum CustomCompSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

enum CustomCompRadius {
  none = "none",
  sm = "sm",
  md = "md",
  lg = "lg",
  full = "full",
}

enum ButtonVariant {
  solid = "solid",
  bordered = "bordered",
  light = "light",
  flat = "flat",
  faded = "faded",
  shadow = "shadow",
  ghost = "ghost",
}

enum ButtonType {
  submit = "submit",
  reset = "reset",
  button = "button",
}

type CustomButtonProps = {
  children: ReactNode;
  className?: string;
  varient?: ButtonVariant;
  color?: CustomCompColor;
  size?: CustomCompSize;
  radius?: CustomCompRadius;
  type?: ButtonType;
  fullWidth?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
};

const CustomButton = ({
  isDisabled = false,
  type = ButtonType.button,
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      variant={props.varient}
      color={props.color}
      size={props.size}
      radius={props.radius}
      fullWidth={props.fullWidth}
      isDisabled={isDisabled}
      className={props.className}
      onPress={props.onClick}
      type={type}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
