import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import superjson from 'superjson';
import { AppRouter } from '../server/route/app.router';
import { Layout } from '@/ui/Layout';
import { Suspense } from 'react';
import Spinner from '@/ui/Spinner';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Component {...pageProps} />
      </Suspense>
    </Layout>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url: process.env.NEXT_PUBLIC_API_URL as string,
      }),
    ];

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
            suspense: true,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers, // enable cookies
            'x-ssr': '1',
          };
        }
        return {};
      },
      links,
      transformer: superjson,
    };
  },
  ssr: false, // Do we need SSR? Test performance for best user experience
})(App);
