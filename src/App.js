import logo from "./logo.svg";
import "./App.css";
import GalleryPage from "./components/GalleryPage";

function App() {
  return (
    <div className="App">
      <GalleryPage></GalleryPage>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Chumi Weiss</p>
        <a
          className="App-link"
          href=""
          //target="_blank"
          rel="noopener noreferrer"
        >
          Browse Now
        </a>
      </header>
    </div>
  );
}

export default App;
