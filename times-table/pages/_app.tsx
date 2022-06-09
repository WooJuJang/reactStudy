import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TimesTable from './TimesTable';

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return <TimesTable />;
}

export default MyApp;
