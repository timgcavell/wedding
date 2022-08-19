import Header from "../components/header";
import Compact from "../components/compact";

export const config = {
  unstable_runtimeJS: false,
};

const registries = [
  {
    name: "Zola",
    link: "https://www.zola.com/registry/maryandtimwedding"
  },
  {
    name: "CB2",
    link: "https://www.cb2.com/gift-registry/tim-cavell-and-mary-gibson/r6498403"
  },
  {
    name: "Crate and Barrel",
    link: "https://www.crateandbarrel.com/gift-registry/tim-cavell-and-mary-gibson/r6516673"
  },
  {
    name: "Williams Sonoma",
    link: "https://www.williams-sonoma.com/registry/fkzp7pkh2v/registry-list.html"
  },
  {
    name: "Amazon",
    link: "https://www.amazon.com/wedding/share/maryandtimwedding"
  },
]

export default function Wedding() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <h3>Registry</h3>
        <ul>
          {registries.map((registry) => {
            return (
              <li key={registry.name}>
                <Compact item={registry} />
              </li>
            )
          })
          }
        </ul>
      </main>
    </>
  )
}
