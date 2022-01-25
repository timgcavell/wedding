import Link from "next/link";

export default function Header({ extraClassName }) {
  return (
    <>
      <header>
        <h2 className={extraClassName}>Austin, TX</h2>
        <h1 title="Mary and ~Graham~ 😘"><Link href="/">Mary and Tim</Link></h1>
        <h2 className={extraClassName}>November 19th, 2022</h2>
      </header>
      <hr />
    </>
  )
}
