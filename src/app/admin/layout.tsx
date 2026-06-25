import React from "react";

import { Container } from "@/ui";

import { AdminBody } from "./_components";

const Layout: React.FC<LayoutProps<"/">> = ({ children }) => (
  <div>
    <Container>
      <AdminBody>{children}</AdminBody>
    </Container>
  </div>
);

export { metadata } from "./metadata";
export default Layout;
