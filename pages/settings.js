import Head from "next/head";

import ComingSoon from "../features/coming-soon";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Settings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ComingSoon />
    </>
  );
}
