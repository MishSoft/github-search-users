import sunIcon from "/public/assets/icon-sun.svg";
import { useThemeContext } from "../../../context/context";
import moonIcon from "/public/assets/icon-moon.svg";

function Mode() {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme((cur) => !cur)
    document.body.classList.toggle('dark')
  }

  return (
    <div className="mode-component" onClick={toggleTheme}>
      <span>{theme ? "Light" : "Dark"}</span>
      <img src={theme ? sunIcon : moonIcon} alt="mode-image" />
    </div>
  );
}

export default Mode;
