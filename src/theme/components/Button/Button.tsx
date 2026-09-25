import React from "react";
// import { Link as ViewTransitionLink } from "next-view-transitions";
// import Link, { type LinkProps } from "next/link";

import { Icon } from "@/ui";

import { wrapperClass, labelClass } from "./Button.css";

// import type { RouteType } from "next/dist/lib/load-custom-routes";
import type { TProps } from "./Button.types";

const Button: React.FC<TProps> = ({
  children,
  className,
  // disabled,
  // href,
  iconId,
  // id,
  // onClick,
  size,
  // target,
  template,
  // title,
  type = "button",
  // value,
  ...rest
}) => {
  const renderLayout: React.ReactElement = (
    <>
      {iconId && <Icon id={iconId} />}
      {children && <span className={labelClass}>{children}</span>}
    </>
  );

  // if (href) {
  //   return (
  //     <a
  //       className={`
  //         ${wrapperClass({ size, template })}
  //         ${className && !!className.length ? ` ${className}` : ""}
  //       `}
  //       {...{ href, target }}
  //     >
  //       {renderLayout}
  //     </a>
  //   );
  // }

  return (
    <button
      className={`
        ${wrapperClass({ size, template })}
        ${className && !!className.length ? ` ${className}` : ""}
      `}
      {...{ type, ...rest }}
    >
      {renderLayout}
    </button>
  );
};

export { Button };
