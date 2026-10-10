import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "text" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  arrow?: boolean;
};

type LinkProps = SharedProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  onClick?: never;
};
type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export type ButtonProps = LinkProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "", arrow = false, ...rest } = props;
  const classes = `button button--${variant} button--${size} ${className}`.trim();
  const content = <>{children}{arrow && <span className="button__arrow" aria-hidden="true">↗</span>}</>;

  if ("href" in props && typeof props.href === "string") {
    return <Link href={props.href} className={classes} {...(rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}>{content}</Link>;
  }

  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{content}</button>;
}
