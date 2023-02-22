import { moonSVG, sunSVG } from '../../icons/icons';
import './ThemeSlider.scss'


export const ThemeSlider = () => {

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

    return (<label className="toggle-theme">
        <input
            onChange={(e) => {
                changeBack();
            }}
            type="checkbox"
        />
        <span className="back">
            {moonSVG}
            {sunSVG}
        </span>
        <span
            className={"ball " + (theme === "light" ? "ball--right" : "")}
        ></span>
    </label>);
}