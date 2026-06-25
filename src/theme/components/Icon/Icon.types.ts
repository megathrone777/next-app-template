export type TIconID = "address" | "angle" | "car" | "checkmark" | "exclamation" | "trash";

export interface TProps {
  className?: React.HTMLAttributes<HTMLElement>["className"];
  id: TIconID;
}
