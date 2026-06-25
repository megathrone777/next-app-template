"use client";
import React from "react";

import { Button } from "@/ui";

const GlobalError: React.FC = () => (
  <html lang="cs">
    <body>
      <div className="error">
        <h1 className="error__title">Stránka nenalezena</h1>
        <Button href="/">Hlavní stránka</Button>
      </div>
    </body>
  </html>
);

export default GlobalError;
