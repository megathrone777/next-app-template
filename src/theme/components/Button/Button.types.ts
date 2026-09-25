import type { TButtonVariants } from "./Button.css";

import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import type { LinkProps } from "next/link";

export interface TProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>, TButtonVariants {
  href?: LinkProps<string>["href"];
  iconId?: TIconId;
  target?: HTMLAnchorElement["target"];
  withTransition?: true;
}
