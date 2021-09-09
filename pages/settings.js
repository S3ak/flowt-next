import Head from "next/head";

import s from "../styles/Splash.module.css";
import u from "../styles/Utility.module.css";
import ComingSoon from "../features/coming-soon";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Settings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ComingSoon />
      </div>
    </>
  );
}
