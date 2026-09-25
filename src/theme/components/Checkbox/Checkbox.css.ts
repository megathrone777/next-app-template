import { style, recipe } from "@/theme";

export const wrapperClass = style(({ devices }) => ({
  alignItems: "start",
  columnGap: 5,
  display: "grid",
  gridAutoFlow: "column",
  justifyContent: "start",

  "@media": {
    [devices.mobile]: {
      columnGap: 8,
    },
  },
}));

export const layoutClass = recipe(({ colors }) => ({
  base: {
    alignContent: "center",
    alignItems: "center",
    border: `2px solid ${colors.red}`,
    borderRadius: "50%",
    color: colors.red,
    display: "grid",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },

  defaultVariants: {
    template: "normal",
  },

  variants: {
    template: {
      normal: {
        height: 25,
        minWidth: 25,
        width: 25,
      },

      small: {
        height: 21,
        minWidth: 21,
        width: 21,
      },
    },
  },
}));

export const inputClass = style({
  cursor: "pointer",
  display: "block",
  height: "100%",
  inset: 0,
  opacity: 0,
  overflow: "hidden",
  position: "absolute",
  width: "100%",
  zIndex: 2,
});

export const iconClass = recipe(({ devices }) => ({
  base: {
    display: "none",
    pointerEvents: "none",
    selectors: {
      [`${inputClass}:checked + &`]: {
        display: "block",
      },
    },
    transform: "translateY(1px)",
  },

  defaultVariants: {
    template: "normal",
  },

  variants: {
    template: {
      normal: {
        height: 13,
      },

      small: {
        height: 10,

        "@media": {
          [devices.desktopLg]: {
            transform: "none",
          },
        },
      },
    },
  },
}));

export const labelClass = recipe(({ fonts }) => ({
  base: {
    cursor: "pointer",
    userSelect: "none",
  },

  defaultVariants: {
    template: "normal",
  },

  variants: {
    template: {
      normal: {
        fontWeight: fonts.medium,
        lineHeight: "25px",
      },

      small: {
        fontWeight: fonts.medium,
        lineHeight: "21px",
      },
    },
  },
}));
