import Head from 'next/head';
import SignUpForm from '../features/sign-up';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Flowt Sign Up</title>
        <meta name="description" content="Sign up for a Flowt account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignUpForm />
    </>
  );
}
