import Head from "next/head";

import Section from "../components/section";
import Beneficiaries from "../features/beneficiaries";
import SendForm from "../features/send-form";

export default function SendFlowt() {
  return (
    <>
      <Head>
        <title>Send Flowt</title>
        <meta name="description" content="Send Flowt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Beneficiaries />

        <SendForm />
      </Section>
    </>
  );
}
