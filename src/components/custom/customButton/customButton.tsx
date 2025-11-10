import { CustomColor, CustomRadius, CustomSize } from "@/services/types";
import { Button } from "@heroui/react";
import { ReactNode } from "react";

export enum ButtonVariant {
  solid = "solid",
  bordered = "bordered",
  light = "light",
  flat = "flat",
  faded = "faded",
  shadow = "shadow",
  ghost = "ghost",
}

export enum ButtonType {
  submit = "submit",
  reset = "reset",
  button = "button",
}

type CustomButtonProps = {
  children: ReactNode;
  className?: string;
  varient?: ButtonVariant;
  color?: CustomColor;
  size?: CustomSize;
  radius?: CustomRadius;
  type?: ButtonType;
  fullWidth?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
};

const CustomButton = ({
  color = CustomColor.primary,
  isDisabled = false,
  type = ButtonType.button,
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      variant={props.varient}
      color="primary"
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
