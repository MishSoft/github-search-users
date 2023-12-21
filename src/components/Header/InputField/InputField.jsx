import { motion } from "framer-motion";
import searchIcon from "/public/assets/icon-search.svg";
import { useThemeContext } from "../../../context/context";

function InputField({ setValue, onSethandleValue, onSetHandleInputValue, setCaughtError }) {
  const { theme } = useThemeContext();
  return (
    <form
      onSubmit={onSethandleValue}
      className={`inputField ${setCaughtError ? "errorInput" : ""} ${theme ? "dark" : ""}`}
    >
      <img src={searchIcon} alt="search icon" />
      <input
        onChange={onSetHandleInputValue}
        type="text"
        placeholder="Search GitHub username…"
        value={setValue}
      />
      <span className={setCaughtError ? "error-message" : ""}>No results</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
      >
        Search
      </motion.button>
    </form>
  );
}

export default InputField;
