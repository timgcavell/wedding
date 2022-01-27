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
  return (
    <>
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
          <div className="image1"><Image priority quality="30" src={image1} /></div>
          <div className="image2"><Image priority quality="30" src={image3} /></div>
          <div className="image3"><Image priority quality="30" src={image5} /></div>
          <div className="image4"><Image priority quality="30" src={image11} /></div>
          <div className="image5"><Image priority quality="30" src={image2} /></div>
        </nav>
      </main>
    </>
  )
}
