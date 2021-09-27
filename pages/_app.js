import '../styles/globals.css';
import 'animate.css';

import { AuthProvider } from '../libs/auth/useAuth';
import { NavProvider } from '../libs/nav/useNav';

import DefaultLayout from '../layouts/default';

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <AuthProvider>
      <NavProvider>{getLayout(<Component {...pageProps} />)}</NavProvider>
    </AuthProvider>
  );
}

export default MyApp;
