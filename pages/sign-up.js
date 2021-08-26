import Head from "next/head";
import s from "../styles/Splash.module.css";
import u from "../styles/Utility.module.css";
import SignUpForm from "../features/sign-up";

export default function SignUp() {
  return (
    <div className={u.lApp}>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up for a Flowt account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.lMain}>
        <SignUpForm />
      </main>
    </div>
  );
}
