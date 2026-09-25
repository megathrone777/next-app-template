import type { TSpinnerVariants } from "./Spinner.css";

import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

export interface TProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TSpinnerVariants {
  color?: CSSProperties["color"];
}
