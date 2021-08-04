import Script from "next/script";

import "../styles/globals.css";
import "animate.css";

import * as FullStory from "@fullstory/browser";

FullStory.init({
  orgId: process.env.NODE_ENV === "production" && process.env.FULLSTORY_ORG_ID,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
