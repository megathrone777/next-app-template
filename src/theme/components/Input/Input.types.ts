import type { TInputVariants } from "./Input.css";

import type { InputHTMLAttributes, DetailedHTMLProps } from "react";

export interface TProps
  extends
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  TInputVariants {
  iconId?: TIconId;
  label?: string;
}
