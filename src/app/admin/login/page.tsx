import React from "react";
import Form from "next/form";

import { login } from "@/app/admin/_actions";
import { Button, Container, Input } from "@/ui";

const Page: React.FC<PageProps<"/admin/login">> = () => (
  <div>
    <Container>
      <div>
        <h1>Administrator</h1>

        <Form action={login}>
          <Input
            name="login"
            placeholder="Login"
            type="text"
          />

          <Input
            name="password"
            placeholder="Password"
            type="password"
          />

          <Button type="submit">Sign in</Button>
        </Form>
      </div>
    </Container>
  </div>
);

export default Page;
