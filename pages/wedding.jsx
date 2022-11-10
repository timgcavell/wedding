import Image from "next/image";
import Header from "../components/header";
import hero from "../public/images/8.jpeg";

export const config = {
  unstable_runtimeJS: false,
};

export default function Wedding() {
  return <>
    <Header extraClassName={"mobile-hidden"} />
    <main className="wrapper">
      <h3>Ceremony</h3>
      <h4>Hotel Ella, Austin, TX</h4>
      <h4>November 19, 2022, 5pm</h4>
      <br />
      <br />
      <br />
      <br />
      <h3>Rehearsal Dinner</h3>
      <h4>Jacoby&apos;s Restaurant & Mercantile</h4>
      <h4>November 18, 2022, 6pm</h4>
      <div className="full-bleed">
        <Image
          priority
          alt="A closeup of Mary and Tim’s hands showing Mary’s engagement ring"
          src={hero}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </div>
    </main>
  </>;
}
