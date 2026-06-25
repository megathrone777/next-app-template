import localFont from "next/font/local";

const avenirFont = localFont({
  src: [
    {
      path: "./AvenirNext-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "./AvenirNext-Demi.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "./AvenirNext-Medium.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "./AvenirNext-Bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-avenir",
});

export { avenirFont };
