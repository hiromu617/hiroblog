import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { Header } from '../src/components/Layout/Header';
import { Footer } from '../src/components/Layout/Footer';
import initTwitterScriptInner from 'zenn-embed-elements/lib/init-twitter-script-inner';
import { useEffect } from 'react';
import { usePageView, GoogleAnalytics } from '../src/libs/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  // @ts-ignore
  useEffect(() => import('zenn-embed-elements'), []);
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: initTwitterScriptInner,
        }}
      />
      <GoogleAnalytics />
      <Header />
      <div className="min-h-screen justify-center py-5 px-3 md:px-5 bg-base-200">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
