import type { AppProps /* , AppContext */ } from 'next/app';
import Head from 'next/head';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

// _app.tsx sebagai wrapper semua pages, running both on server and client
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
