"use client";
import React, { useState } from "react";

import type { TProps } from "./RoleSelect.types";

const RoleSelect: React.FC<TProps> = ({ defaultValue, options }) => {
  const [role, setRole] = useState<TUserRole>(defaultValue);

  const handleSelectChange = ({ currentTarget }: React.SyntheticEvent<HTMLSelectElement>): void => {
    setRole(currentTarget.value as TUserRole);
  };

  return (
    <>
      <input
        name="role"
        type="hidden"
        value={role}
      />

      <select
        name="role"
        onChange={handleSelectChange}
      >
        {options.map<React.ReactElement>(({ label, value }: TSelectOption) => (
          <option
            key={`role-select-option-${value}`}
            {...{ value }}
          >
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

export { RoleSelect };
