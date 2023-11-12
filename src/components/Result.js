export function Result({ children, setMisses, setGuessWord, setDisplayWord }) {
  const handleClick = () => {
    setMisses(0);
    setGuessWord("");
    setDisplayWord("");
    localStorage.clear();
  };
  let h1class;
  if (children === "WYGRAŁEŚ!") {
    h1class = "win";
  } else if (children === "PRZEGRAŁEŚ!") {
    h1class = "loose";
  } else {
    h1class = "Word";
  }

  return (
    <div className="Result">
      <h1 className={h1class}>{children}</h1>
      {h1class === "Word" ? null : (
        <h1 className="btn-reset" onClick={handleClick}>
          {">"}ZAGRAJ PONOWNIE{"<"}
        </h1>
      )}
    </div>
  );
}
