import Head from "next/head";

import ComingSoon from "../features/coming-soon";

export default function Flowt() {
  return (
    <>
      <Head>
        <title>Your Flowt</title>
        <meta name="description" content="Your Flowt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ComingSoon />
    </>
  );
}
