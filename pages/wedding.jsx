import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import { SITE_NAME } from "../lib/constants";
import hero from "../public/images/8.png";

export default function Wedding() {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <Header extraClassName={"mobile-hidden"}/>
      <main className="wrapper">
        <h3>Ceremony</h3>
        <h4>Hotel Ella, Austin, TX</h4>
        <h4>November 19, 2022, 5pm</h4>
        <h4>Cocktail Attire</h4>
        <div className="full-bleed">
          <Image priority src={hero} />
        </div>
      </main>
    </>
  );
}
