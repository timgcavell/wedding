import Head from "next/head";
import Image from "next/image";
import { SITE_NAME } from "../lib/constants";
import Header from "../components/header";
import hero from "../public/images/12.png";

export default function Wedding() {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <Header />
      <main className="wrapper">
        <h3>Registry</h3>
        <h4>🎁 Coming soon</h4>
        <div className="full-bleed"><Image priority src={hero} /></div>
      </main>
    </>
  );
}
