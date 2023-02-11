import "./App.css";
//import "normalize.css";
import { ThemeSlider } from "./components/ThemeSlider/ThemeSlider";
import { Buttons } from "./components/Buttons/Buttons";

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

        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />





      </div>
    </div>
  );
}

export default App;
