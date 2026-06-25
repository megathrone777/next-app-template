import React from "react";

import { createUser } from "@/app/admin/_actions";
import { FormLayout } from "@/app/admin/_components";
import { Input } from "@/ui";

import { RoleSelect } from "../RoleSelect";

import { wrapperClass } from "./CreateUser.css";

const CreateUser: React.FC = () => (
  <FormLayout
    className={wrapperClass}
    formAction={createUser}
  >
    <Input
      label="Name / E-mail"
      name="login"
      placeholder="New user login"
      type="text"
    />

    <Input
      label="Password"
      name="password"
      placeholder="New user password"
      type="text"
    />

    <RoleSelect
      defaultValue="admin"
      options={[
        {
          label: "Admin",
          value: "admin",
        },
      ]}
    />
  </FormLayout>
);

export { CreateUser };
