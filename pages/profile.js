import Head from "next/head";

import ComingSoon from "../features/coming-soon";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ComingSoon />
    </>
  );
}
