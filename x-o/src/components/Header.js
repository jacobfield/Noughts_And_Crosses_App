export function Header() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <header className="headerClass">
      <h1>Team 19 Noughts & Crosses</h1>
      <button className="restartButton" onClick={refreshPage}>
        Restart?
      </button>
    </header>
  );
}
