import { style, recipe, type RecipeVariants } from "@/theme";

export const wrapperClass = recipe(({ colors, devices, fonts }) => ({
  base: {
    borderRadius: 6,
    display: "inline-flex",
    fontWeight: fonts.medium,
  },

  defaultVariants: {
    size: "medium",
    template: "primary",
  },

  variants: {
    size: {
      large: {
        height: 42,

        "@media": {
          [devices.mobile]: { height: 36 },
        },
      },

      medium: { height: 36 },
      small: { height: 32 },
    },

    template: {
      primary: { background: colors.blue, color: colors.white },
      secondary: { background: colors.grayLighter, color: colors.black },
    },
  },
}));

export const labelClass = style({
  cursor: "pointer",
});

export type TButtonVariants = RecipeVariants<typeof wrapperClass>;
