import { useState } from "react";
import { useThemeContext } from "../../context/context";
import InputField from "./InputField/InputField";
import Mode from "./Mode/Mode";

function Header({ setUserData, checkActiveBoard }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`
      );
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
      checkActiveBoard(true);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const { theme } = useThemeContext();
  return (
    <div className={`header-component-header`}>
      <div className="title-mode">
        <h1 className={theme ? "dark" : ""}>devfinder</h1>
        <Mode />
      </div>
      <InputField
        value={inputValue}
        onSethandleValue={handleSubmit}
        onSetHandleInputValue={handleInputValue}
      />
    </div>
  );
}

export default Header;
