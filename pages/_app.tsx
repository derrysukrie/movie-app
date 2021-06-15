import type { AppProps /* , AppContext */ } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import './index.scss';

// _app.tsx sebagai wrapper semua pages, running both on server and client
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 5 * 60 * 1000,
        staleTime: 20000,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  }));

  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
