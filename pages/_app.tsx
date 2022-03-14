import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { Header } from '../src/components/Layout/Header';
import { Footer } from '../src/components/Layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen justify-center py-5 px-3 md:px-5 bg-base-200">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
