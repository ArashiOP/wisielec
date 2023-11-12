import { categories } from "../consts/categories";

export default function Categories({ setGuessWord, setDisplayWord, guessWord }) {
  function generateRandomWord(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  

  return (
    <div className="Categories">
      <h1 onClick={() => setGuessWord(generateRandomWord(categories.movies))}>
        Filmy
      </h1>
      <h1 onClick={() => setGuessWord(generateRandomWord(categories.games))}>
        Gry
      </h1>
      <h1 onClick={() => setGuessWord(generateRandomWord(categories.food))}>
        Jedzenie
      </h1>
    </div>
  );
}
