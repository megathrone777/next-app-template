import React from "react";
import { ViewTransitions } from "next-view-transitions";

const Layout: React.FC<LayoutProps<"/">> = ({ children }) => (
  <ViewTransitions>
    <main>{children}</main>
  </ViewTransitions>
);

export default Layout;
