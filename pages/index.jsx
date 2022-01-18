import Head from "next/head";
import Image from "next/image";
import SiteNavigation from "../components/site-navigation";
import { SITE_NAME } from "../lib/constants";
import image1 from "../public/images/1.png";
import image2 from "../public/images/2.png";
import image3 from "../public/images/3.png";
import image5 from "../public/images/5.png";
import image11 from "../public/images/11.png";

export const config = {
  unstable_runtimeJS: false,
};

export default function Index() {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <header>
        <h1 className="title">Mary and Tim</h1>
      </header>
      <main>
        <nav className="grid">
          <a className="wedding-link" href="/">Wedding</a>
          <a className="rsvp-link" href="/">RSVP</a>
          <a className="travel-link" href="/">Travel</a>
          <a className="activities-link" href="/">Things to do</a>
          <a className="registry-link" href="/">Registry</a>
          <div className="image1"><Image priority src={image1} /></div>
          <div className="image2"><Image priority src={image3} /></div>
          <div className="image3"><Image priority src={image5} /></div>
          <div className="image4"><Image priority src={image11} /></div>
          <div className="image5"><Image priority src={image2} /></div>
        </nav>
      </main>
    </>
  );
}
