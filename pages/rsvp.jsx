import Header from "../components/header";

export default function RSVP() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <h3>RSVP</h3>
        <iframe src="https://maryandtimswedding.rsvpify.com?embed=1"></iframe>
      </main>
    </>
  )
}
