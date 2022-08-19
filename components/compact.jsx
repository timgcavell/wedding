export default function Compact({ item}) {
  return (
    <div className="compact">
      <a className="link" target="_blank" rel="noreferrer" href={item.link}>{item.name}</a>
    </div>
  )
}
