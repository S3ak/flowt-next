import Head from "next/head";

import Section from "../components/section";
import Beneficiaries from "../features/beneficiaries";
import RequestForm from "../features/request-form";

/* Endpoint: // ${base_api_url}/flowt/request */
export default function RequestFlowt() {
  return (
    <>
      <Head>
        <title>Request Flowt</title>
        <meta name="description" content="Request Flowt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Beneficiaries />
        <RequestForm />
      </Section>
    </>
  );
}
