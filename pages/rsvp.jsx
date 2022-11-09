import Image from "next/image";
import Header from "../components/header";
import hero from "../public/images/13.jpeg";

export const config = {
  unstable_runtimeJS: false,
};

export default function RSVP() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <h3>RSVP</h3>
        <h4>Sorry, RSVPs are closed. We can&apos;t wait to celebrate with you!</h4>
        <div className="full-bleed">
        <Image
          priority
          alt="Mary and Tim looking at each other and laughing"
          src={hero}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </div>
      </main>
    </>
  )
}
