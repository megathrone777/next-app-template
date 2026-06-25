"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { logout } from "@/app/admin/_actions";
import { Burger, Button } from "@/ui";

import { burgerWrapperClass, contentClass, layoutClass } from "./AdminBody.css";

import type { TProps } from "./AdminBody.types";

const AdminBody: React.FC<TProps> = ({ children }) => {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [prevPathname, setPrevPathname] = useState<string>(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpened(false);
  }

  const handleBurgerClick = (): void => {
    setIsOpened((prevOpened: boolean): boolean => !prevOpened);
  };

  return (
    <div className={layoutClass}>
      <div className={contentClass}>
        <div className={burgerWrapperClass}>
          <Burger
            {...{ isOpened }}
            onClick={handleBurgerClick}
          />
        </div>

        {children}

        <form action={logout}>
          <Button
            template="small"
            type="submit"
          >
            Logout
          </Button>
        </form>
      </div>
    </div>
  );
};

export { AdminBody };
