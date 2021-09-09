import Head from "next/head";

import Section from "../components/section";
import Avatar from "../components/avatar";
import Form from "../components/form";
import Input from "../components/form/input";
import Button from "../components/form/button";
import Heading from "../components/heading";

export default function SendFlowt() {
  const selectedUsername = "Khosi";

  const recipients = [
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
    <>
      <Head>
        <title>Send Flowt</title>
        <meta name="description" content="Send Flowt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Section>
          <hr />

          <div>
            <Heading>Friend list</Heading>

            <ul>
              {recipients.map(({ id, title }) => {
                return (
                  <li key={id}>
                    <Avatar />
                    <p>{title}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <Form>
              <Input id="search" name="search" placeholder="search" />

              <Button type="submit">Search</Button>
            </Form>
          </div>

          <div>
            <Heading>To: {selectedUsername}</Heading>

            <Form>
              <Input id="amount" name="amount" placeholder="amount" />

              <Input id="reference" name="reference" placeholder="reference" />

              <Button type="submit">Send Money</Button>
            </Form>
          </div>
        </Section>
      </>
    </>
  );
}
