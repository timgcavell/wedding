export default function Card({ item }) {
  return (
    <div className="card">
      <a className="name" target="_blank" rel="noreferrer" href={item.link}>{item.name}</a>
      <p>{item.description}</p>
    </div>
  );
}
