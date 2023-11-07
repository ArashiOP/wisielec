export default function Categories({ setGuessWord }) {
  let movies = [
    "PULP FICTION",
    "SKAZANI NA SHAWSHANK",
    "LISTY DO M",
    "KAC VEGAS",
    "HARRY POTTER",
    "PIĘKNA I BESTIA",
    "NIENAWISTNA ÓSEMKA",
  ];

  let games = [
    "WIEDŹMIN 3: DZIKI GON",
    "CYBERPUNK",
    "FIFA",
    "NEED FOR SPEED",
    "CALL OF DUTY",
    "ASSASSINS CREED",
    "GRAND THEFT AUTO",
    "SKYRIM",
    "RED DEAD REDEMPTION",
  ];

  let food = [
    "HOT DOG",
    "HAMBURGER",
    "PIEROGI",
    "NALEŚNIKI",
    "BIGOS",
    "ZAPIEKANKA",
    "KEBAB",
    "FRYTKI",
    "BARSZCZ",
  ];

  function generateRandomWord(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  return (
    <div className="Categories">
      <h1 onClick={() => setGuessWord(generateRandomWord(movies))}>Filmy</h1>
      <h1 onClick={() => setGuessWord(generateRandomWord(games))}>Gry</h1>
      <h1 onClick={() => setGuessWord(generateRandomWord(food))}>Jedzenie</h1>
    </div>
  );
}
