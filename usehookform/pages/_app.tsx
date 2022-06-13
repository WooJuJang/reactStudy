import '../styles/globals.css';
import type { AppProps } from 'next/app';
import UseHookForm from './UseHookForm';
import ErrorMessage from './ErrorMessage';
import { Container } from './styled';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <UseHookForm />
      <ErrorMessage />
    </Container>
  );
}

export default MyApp;
