import Heading from "../../components/heading";
import Form from "../../components/form";
import Input from "../../components/form/input-field";
import Button from "../../components/form/button";

import { Wrapper, List } from "./styled";
import Beneficiary from "./beneficiary";

export default function ComingSoon() {
  const selectedUsername = "Khosi";

  const beneficiaries = [
    {
      id: "1",
      title: "Natalie",
    },
    {
      id: "2",
      title: "Mo",
    },
  ];

  return (
    <Wrapper>
      <div>
        <Heading>Friend list</Heading>

        <List>
          {beneficiaries.map(({ id, title }) => (
            <Beneficiary key={id} title={title} />
          ))}
        </List>
      </div>

      <div>
        <Form>
          <Input id="search" name="search" placeholder="search" />

          <Button type="submit">Search</Button>
        </Form>
      </div>
    </Wrapper>
  );
}
