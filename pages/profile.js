import Head from "next/head";

import s from "../styles/Splash.module.css";
import u from "../styles/Utility.module.css";
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
