import { useFormik } from "formik";

import Link from "next/link";

import { Wrapper } from "./styled";

export default function ComingSoon() {
  return (
    <Wrapper>
      <h1>Coming Soon</h1>

      <p>We are working on getting this feature out</p>

      <Link href="/home">
        <a>Home</a>
      </Link>
    </Wrapper>
  );
}
