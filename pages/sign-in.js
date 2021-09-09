import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import s from "../styles/Splash.module.css";
import u from "../styles/Utility.module.css";
import ImgHero from "../public/media/flow-logo--portrait@4x.png";
import SignInForm from "../features/sign-in";
import Section from "../components/section";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Flowt Sign In</title>
        <meta name="description" content="Sign up for a Flowt account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <figure className={`${s.logo} animate__animated animate__fadeInUp`}>
          <Image
            src={ImgHero}
            className={s.logo}
            alt="Picture of the author"
            priority
            width="128.37px"
            height="189.19px"
          />
        </figure>

        <Section>
          <SignInForm />
        </Section>
      </div>
    </>
  );
}
