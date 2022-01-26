import Image from "next/image";
import Header from "../components/header";
import hero from "../public/images/12.png";

export const config = {
  unstable_runtimeJS: false,
};

export default function Wedding() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <h3>Registry</h3>
        <h4>🎁 Coming soon</h4>
        <div className="full-bleed"><Image priority quality="1" src={hero} /></div>
      </main>
    </>
  )
}
