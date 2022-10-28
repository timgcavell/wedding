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
      <h4>Formal</h4>
      <div className="full-bleed">
        <Image
          priority
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
