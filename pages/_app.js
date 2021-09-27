import '../styles/globals.css';
import 'animate.css';

import { AuthProvider } from '../hooks/auth/useAuth';
import { NavProvider } from '../libs/nav/useNav';
import AppLayout from '../modules/app-layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthProvider>
      <NavProvider>
        <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
      </NavProvider>
    </AuthProvider>
  );
}

export default MyApp;
