import React, { useId } from "react";

import { Icon } from "@/ui";

import {
  errorIconClass,
  iconClass,
  iconHolderClass,
  inputClass,
  labelClass,
  layoutClass,
  wrapperClass,
} from "./Input.css";

import type { TProps } from "./Input.types";

const Input: React.FC<TProps> = ({ iconId, label, template, ...rest }) => {
  const inputId = useId();

  return (
    <div className={wrapperClass}>
      {label && !!label.length && (
        <label
          className={labelClass}
          htmlFor={inputId}
        >
          {label}
        </label>
      )}

      <div className={layoutClass}>
        {iconId && (
          <div className={iconHolderClass}>
            <Icon
              className={iconClass}
              id={iconId}
            />
          </div>
        )}

        <input
          autoComplete="new-password"
          className={inputClass({ template })}
          id={inputId}
          spellCheck="false"
          {...rest}
        />

        {template === "error" && (
          <Icon
            className={errorIconClass}
            id="exclamation"
          />
        )}
      </div>
    </div>
  );
};

export { Input };
