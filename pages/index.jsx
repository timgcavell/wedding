import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import { SITE_NAME } from "../lib/constants";
import glimmer from "../public/images/glimmer.png";
import image1 from "../public/images/1.png";
import image2 from "../public/images/2.png";
import image3 from "../public/images/14.png";
import image5 from "../public/images/3.png";
import image11 from "../public/images/21.png";

export default function Index() {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <Header />
      <main>
        <nav>
          <div className="wedding-link container">
            <Link href="/wedding">Wedding</Link>
            {/* <div className="hover"><Image src={glimmer} /></div> */}
          </div>
          <div className="travel-link"><Link href="/lodging">Lodging</Link></div>
          <div className="activities-link"><Link href="/austin">Austin</Link></div>
          <div className="rsvp-link"><Link href="/rsvp">RSVP</Link></div>
          <div className="registry-link"><Link href="/registry">Registry</Link></div>
          <div className="image1"><Image priority src={image1} /></div>
          <div className="image2"><Image priority src={image3} /></div>
          <div className="image3"><Image priority src={image5} /></div>
          <div className="image4"><Image src={image11} /></div>
          <div className="image5"><Image src={image2} /></div>
        </nav>
      </main>
    </>
  );
}
