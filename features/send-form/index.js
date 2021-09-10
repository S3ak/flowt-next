import { Wrapper } from "./styled";
import Heading from "../../components/heading";
import Form from "../../components/form";
import Input from "../../components/form/input-field";
import Button from "../../components/form/button";

export default function SendForm({ children }) {
  const selectedUsername = "Khosi";

  return (
    <Wrapper>
      <Heading>To: {selectedUsername}</Heading>

      <Form>
        <Input id="amount" name="amount" placeholder="amount" />

        <Input id="reference" name="reference" placeholder="reference" />

        <Button type="submit">Send Money</Button>
      </Form>

      {children}
    </Wrapper>
  );
}
