import GlobalStyle from '../styles/GlobalStyle';
import Head from 'next/head';

import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Blog Juicedaily</title>
    </Head>
      <GlobalStyle />
      <main>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp
