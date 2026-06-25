import type { Metadata } from "next";

const description: string = "Meta description";
const imageURL: string = "/images/og_img.jpg";
const publicURL: string = process.env.PUBLIC_URL;
const title: string = "Meta title";

const metadata: Metadata = {
  description,
  formatDetection: {
    telephone: false,
  },
  icons: [
    {
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "96x96",
      type: "image/png",
      url: "/favicon-96x96.png",
    },
  ],
  metadataBase: new URL(publicURL),
  openGraph: {
    description,
    images: `${publicURL}${imageURL}`,
    siteName: "Site name",
    title,
    type: "website",
    url: publicURL,
  },
  title,
  twitter: {
    card: "summary_large_image",
    description,
    images: imageURL,
  },
};

export { metadata };
