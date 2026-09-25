import { recipe, type RecipeVariants } from "@/theme";

export const wrapperClass = recipe(({ animations }) => ({
  base: {
    animationDuration: ".5s",
    animationIterationCount: "infinite",
    animationName: animations.spin,
    animationTimingFunction: "linear",
    borderRadius: "50%",
    borderStyle: "solid",
  },

  defaultVariants: {
    template: "normal",
  },

  variants: {
    template: {
      normal: {
        borderWidth: 8,
        height: 50,
        width: 50,
      },

      small: {
        borderWidth: 4,
        height: 22,
        width: 22,
      },
    },
  },
}));

export type TSpinnerVariants = RecipeVariants<typeof wrapperClass>;
