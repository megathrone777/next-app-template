import React from "react";

import { Button } from "@/ui";

const Page: React.FC = () => (
  <div className="error">
    <h1 className="error__title">Stránka nenalezena</h1>
    <Button href="/">Hlavní stránka</Button>
  </div>
);

export default Page;
