// src/components/ui/Text.tsx
import clsx from "clsx";
import React from "react";

export enum TextVariant {
  headline = "headline",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  bodyLg = "bodyLg",
  body = "body",
  bodySm = "bodySm",
  caption = "caption",
}

const variantClasses: Record<TextVariant, string> = {
  [TextVariant.headline]: "text-pre5 sm:text-5xl lg:text-6xl font-bold",
  [TextVariant.h1]: "text-4xl sm:text-pre5 lg:text-5xl font-bold",
  [TextVariant.h2]: "text-3xl sm:text-4xl lg:text-post4 font-semibold",
  [TextVariant.h3]: "text-2xl sm:text-3xl lg:text-4xl font-semibold",
  [TextVariant.bodyLg]: "text-base sm:text-lg lg:text-xl font-medium",
  [TextVariant.body]: "text-sm sm:text-base lg:text-lg font-normal",
  [TextVariant.bodySm]: "text-xs sm:text-sm lg:text-base font-normal",
  [TextVariant.caption]: "text-[10px] sm:text-xs lg:text-sm font-normal",
};

type TextProps = React.HTMLAttributes<HTMLElement> & {
  /** The typography variant to apply */
  variant?: TextVariant;
  /** Optional: choose which HTML tag to render (p, span, h1, etc.) */
  as?: keyof HTMLElementTagNameMap;
  /** Additional className to extend styling */
  className?: string;
  /** Children (text content or nested elements) */
  children: React.ReactNode;
};

const Text = ({
  variant = TextVariant.body,
  as: Component = "p",
  className,
  children,
  ...props
}: TextProps) => {
  return (
    <Component className={clsx(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
};

export default Text;
