import Head from 'next/head'
import { SITE_NAME } from "../lib/constants";
import "../styles/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
