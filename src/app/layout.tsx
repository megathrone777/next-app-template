import React, { ViewTransition } from "react";
import Link from "next/link";

import "@/theme/global";

import { avenirFont } from "./fonts";

const Layout: React.FC<LayoutProps<"/">> = ({ children }) => (
  <html
    className={avenirFont.variable}
    lang="en"
  >
    <body>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
        </ul>
      </div>

      <ViewTransition>{children}</ViewTransition>
    </body>
  </html>
);

export { metadata } from "./metadata";
export { viewport } from "./viewport";
export default Layout;
