import "./Header.css";

export function Header(): JSX.Element {
  return (
    <header className="App-header">
      <div className="App-header-buttons-container">
      <button className="App-header-button"><h3>About Me</h3></button>
      <button className="App-header-button" ><h3>Portfolio</h3></button>
      <button className="App-header-button" ><h3>Blog</h3></button>
      <button className="App-header-button" ><h3>Contact</h3></button>
      </div>
    </header>
  );
}
