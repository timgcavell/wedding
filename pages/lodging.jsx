import Header from "../components/header";
import Card from "../components/card";

export const config = {
  unstable_runtimeJS: false,
};

const hotels = [
  {
    name: "Hotel Ella",
    link: "https://hotelella.com",
    description: "Hotel Ella located just west of UT Campus and where the wedding will be held.",
  },
  {
    name: "AC Hotel Austin",
    link: "https://www.marriott.com/hotels/travel/ausaw-ac-hotel-austin-university",
    description: "AC Hotel Austin is just a couple blocks down the road from the wedding.",
  },
  {
    name: "Hilton Garden Inn",
    link: "https://www.hilton.com/en/hotels/ausaugi-hilton-garden-inn-austin-university-capitol-district",
    description: "This is another great option just down the road from the wedding."
  },
  {
    name: "East Austin Hotel",
    link: "https://eastaustinhotel.com",
    description: "Located on East 6th St. East Austin Hotel is a fun boutique hotel and the upstairs bar, The Upside, is one of our favorite places for a drink.",
  },
]

export default function Lodging() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <h3>Lodging</h3>
        <ul>
          {hotels.map((hotel) => {
            return (
              <li key={hotel.name}>
                <Card item={hotel} linkText="Book Here" />
              </li>
            )
          })
          }
        </ul>
      </main>
    </>
  )
}
