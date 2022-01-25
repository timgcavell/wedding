export default function Card({ item, linkText="Website" }) {
  return (
    <div className="card">
      <div className="name">{item.name}</div>
      <a className="link" target="_blank" rel="noreferrer" href={item.link}>{linkText}</a>
      <p>{item.description}</p>
    </div>
  );
}
