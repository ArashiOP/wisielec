export function Word({ displayWord, guessWord, misses }) {
  return <h1 className="Word">{misses >= 9 ? guessWord : displayWord}</h1>;
}
