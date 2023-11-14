import { useState } from "react";

const InputWordPopUp = ({ setGuessWord, setIsVisible, isVisible }) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    const regex = /^[a-zA-Ząćęłńóśźż\s]*$/;
    if (regex.test(value)) {
      setUserInput(value);
    }
  };
  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = () => {
    userInput.trim() === ""
      ? toggleIsVisible()
      : setGuessWord(userInput.toUpperCase());
    setUserInput("");
    toggleIsVisible();
  };

  return (
    <>
      {isVisible && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Wpisz Hasło</h2>
            <input
              className="input"
              type="password"
              value={userInput}
              onChange={handleChange}
              autoFocus
            />
            <button className="btn-set" onClick={handleSubmit}>
              Ustaw Hasło
            </button>
            <button
              onClick={() => {
                toggleIsVisible();
                setUserInput("");
              }}
              className="btn-close"
            >
              Anuluj
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InputWordPopUp;
