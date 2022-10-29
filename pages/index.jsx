import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import image1 from "../public/images/1.jpeg";
import image2 from "../public/images/2.jpeg";
import image3 from "../public/images/14.jpeg";
import image5 from "../public/images/3.jpeg";
import image11 from "../public/images/21.jpeg";

export const config = {
  unstable_runtimeJS: false,
};

export default function Index() {
  return <>
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
        <Image
          className="image1"
          priority
          quality="30"
          alt="Mary and Tim looking at each other with fall leaves behind them"
          src={image1} />
        <Image
          className="image2"
          priority
          quality="30"
          alt="Selfie of Mary and Tim in New York"
          src={image3} />
        <Image
          className="image3"
          priority
          quality="30"
          alt="Mary and Tim and their dog Remi posing on a dock in front of the Austin skyline"
          src={image5} />
        <Image
          className="image4"
          priority
          quality="30"
          alt="Mary and Tim and their dog Remi sitting on their backyard patio"
          src={image11} />
        <Image
          className="image5"
          priority
          quality="30"
          alt="Mary and Tim posing with fall leaves behind them"
          src={image2} />
      </nav>
    </main>
  </>;
}
