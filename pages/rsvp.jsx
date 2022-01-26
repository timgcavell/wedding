import Image from "next/image";
import Header from "../components/header";
import hero from "../public/images/13.png";

export const config = {
  unstable_runtimeJS: false,
};

export default function RSVP() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <h3>RSVP</h3>
        <h4>📫 Coming soon</h4>
        <div className="full-bleed"><Image priority quality="1" src={hero} /></div>
      </main>
    </>
  )
}
