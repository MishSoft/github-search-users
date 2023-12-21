import { useState } from "react";
import { useThemeContext } from "../../context/context";
import InputField from "./InputField/InputField";
import Mode from "./Mode/Mode";

function Header({ setUserData, checkActiveBoard }) {
  const [inputValue, setInputValue] = useState("");
  const [caughtError, setCaughtError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`
      );
      if (!response.ok) {
        setCaughtError(true);
        checkActiveBoard(true);
      } else {
        checkActiveBoard(false);
        setCaughtError(false);
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const { theme } = useThemeContext();
  return (
    <div className='header-component-header'>
      <div className="title-mode">
        <h1 className={theme ? "dark" : ""}>devfinder</h1>
        <Mode />
      </div>
      <InputField
        value={inputValue}
        onSethandleValue={handleSubmit}
        onSetHandleInputValue={handleInputValue}
        setCaughtError={caughtError}
      />
    </div>
  );
}

export default Header;
