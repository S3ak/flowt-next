import Form from "../../components/form";
import InputField from "../../components/form/input-field";
import Button from "../../components/form/button";
import { Wrapper } from "./styled";

export default function SignUpForm({ handleSubmit, inputFields = [] }) {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {inputFields.map(({ id, label, type, placeholder }) => {
          return (
            <>
              <InputField key={id} />
            </>
          );
        })}

        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
}
