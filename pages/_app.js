import "../styles/globals.css";
import "animate.css";

import AppLayout from "../modules/app-layout";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
