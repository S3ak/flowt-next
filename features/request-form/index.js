import Heading from "../../components/heading";
import Form from "../../components/form";
import Input from "../../components/form/input-field";
import Button from "../../components/form/button";

import { Wrapper } from "./styled";

export default function RequestForm({ children }) {
  const selectedUsername = "Khosi";

  return (
    <Wrapper>
      <Heading>From: {selectedUsername}</Heading>

      <Form>
        <Input id="amount" name="amount" placeholder="amount" />

        <Input id="reference" name="reference" placeholder="reference" />

        <Button type="submit">Request Money</Button>
      </Form>

      {children}
    </Wrapper>
  );
}
