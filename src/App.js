import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/AidaMirzapour"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Aida Mirzapour
          </a>{" "}
          , and is{" "}
          <a
            href="https://github.com/AidaMirzapour/React-WeatherApp"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-source
          </a>{" "}
          on GitHub.
        </footer>
      </div>
    </div>
  );
}

export default App;
