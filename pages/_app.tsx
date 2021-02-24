import Head from 'next/head';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

// _app.tsx sebagai wrapper semua pages, running both on server and client
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
