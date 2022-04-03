import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { Header } from '../src/components/Layout/Header';
import { Footer } from '../src/components/Layout/Footer';
import initTwitterScriptInner from 'zenn-embed-elements/lib/init-twitter-script-inner';
import { useEffect } from 'react';
import { usePageView, GoogleAnalytics } from '../src/libs/gtag';
import Head from 'next/head';
import Script from 'next/script';
import NextProgress from 'next-progress';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  // @ts-ignore
  useEffect(() => import('zenn-embed-elements'), []);
  return (
    <>
      <Script
        id="twitter"
        dangerouslySetInnerHTML={{
          __html: initTwitterScriptInner,
        }}
      />
      <GoogleAnalytics />
      <Head>
        {/* Chrome / Firefox / Edge */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🛹</text></svg>"
        ></link>
        {/* Safari / IE */}
        <link
          rel="icon alternate"
          type="image/png"
          href="https://twemoji.maxcdn.com/v/14.0.1/72x72/1f6f9.png"
        />
      </Head>
      <NextProgress delay={300} options={{ showSpinner: false }} color="#0B7AFF" />
      <Header />
      <div className="min-h-screen justify-center py-5 px-3 md:px-5 bg-base-200">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
