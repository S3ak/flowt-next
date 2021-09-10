import Head from "next/head";

import Section from "../components/section";

import Timeline from "../features/timeline";

export default function Home() {
  const username = "username";

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Timeline />
      </Section>
    </>
  );
}
