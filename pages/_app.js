import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale-1.02, width=device-widh" />
        <meta name="description" content="next js events" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
