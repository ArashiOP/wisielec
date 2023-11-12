export function Gallows({ misses }) {
  return <img className="Gallows" src={`img/s${misses <= 9 ? misses : 9}.jpg`} alt="true"></img>;
}
