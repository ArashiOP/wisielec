export default function Letter({ children, setHasło, hasło1, hasło }) {
  function handleClick() {
    for (let i = 0; i < hasło1.length; i++) {
      if (hasło1[i] === children && hasło[i] !== children) {
        setHasło(hasło.slice(0, i) + children + hasło.slice(i + 1));
      }
    }
  }

  return (
    <div onClick={handleClick} className="Letter">
      {children}
    </div>
  );
}
