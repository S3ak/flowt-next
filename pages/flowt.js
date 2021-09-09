import Head from "next/head";

import s from "../styles/Splash.module.css";
import u from "../styles/Utility.module.css";
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
