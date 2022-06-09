import '../styles/globals.css';
import type { AppProps } from 'next/app';
import WordChain from './WordChain';

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return <WordChain />;
}

export default MyApp;
