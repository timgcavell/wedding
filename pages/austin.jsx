import Header from "../components/header";
import Card from "../components/card";


const attractions = [
  {
    name: "🌮 Cisco’s",
    link: "https://www.ciscosaustin.com/",
    description: "Visit for breakfast, lunch, or dinner, Cisco’s is an old Tex-Mex place with great frozen margaritas. Located on East 6th St with a lot of other places to go for food and drinks.",
  },
  {
    name: "🍻 Lazarus",
    link: "https://www.lazarusbrewing.com/",
    description: "Also on East 6th St, Lazarus is a brewery that’s a great place to spend an afternoon. They also serve coffee, tacos, and wine.",
  },
  {
    name: "🔧 Central Machine Works",
    link: "https://www.cmwbrewery.com/",
    description: "A bit further east is an old shop turned brewery. They’ve got a lot of space outside and a full bar and kitchen.",
  },
  {
    name: "🚋 South Congress",
    link: "https://gueros.com/",
    description: "South Congress, just south of the river, is an old Austin staple where you can get your tourist itch itched. Get breakfast tacos at Jo’s Coffee, pizza at Home Slice, music at Güero’s Taco Bar and The Continental Club.",
  },
  {
    name: "🚲 Mellow Johnny’s",
    link: "https://www.mellowjohnnys.com/",
    description: "A great way to see a lot of the town is by bike. Mellow Johnny’s has served us well for a reliable daily rental that you can take around the hike bike trail.",
  },
  {
    name: "🌳 Barton Creek Greenbelt",
    link: "https://goo.gl/maps/4VM22tf4R89mpfbt8",
    description: "Park at Barton Springs Pool to easily get to the trail head and enjoy a hike right in the city.",
  },
  {
    name: "🥾 Turkey Creek Trail",
    link: "https://www.alltrails.com/trail/us/texas/turkey-creek-trail",
    description: "This hike is a little bit further out but is easy to get to and a comfortable easy trail. If it’s rained recently, get ready to get your shoes wet..",
  },
]

export default function Austin() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <h3>Things to do</h3>
        <ul>
          {attractions.map((attraction) => {
            return (
              <li key={attraction.name}>
                <Card item={attraction} />
              </li>
            )
          })
          }
        </ul>
      </main>
    </>
  )
}
