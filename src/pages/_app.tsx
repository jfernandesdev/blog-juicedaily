import GlobalStyle from '../styles/GlobalStyle';
import Head from 'next/head';

import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Blog Juicedaily</title>
    </Head>
      <GlobalStyle />
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default MyApp
