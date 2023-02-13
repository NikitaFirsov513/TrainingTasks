import "./App.scss";
//import "normalize.css";
import { ThemeSlider } from "./components/ThemeSlider/ThemeSlider";
import { Buttons } from "./components/Buttons/Buttons";
import { Inputs } from "./components/Inputs/Inputs";
import { Dropdowns } from "./components/Dropdowns/Dropdowns";

function App() {
  const theme = window.localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
  }

  const changeBack = () => {
    document.body.classList.toggle("dark");
    document.querySelector(".ball")?.classList.toggle("ball--right");

    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
  };

  return (
    <div className="app">
      <div className="app__theme-slider">
        <ThemeSlider />
      </div>
      <div className="app__container">
        <div className="app__container-line">
          <Buttons /> <Dropdowns />
        </div>
        <div className="app__container-line">
          <Inputs />        </div>
        <div className="app__container-line">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
