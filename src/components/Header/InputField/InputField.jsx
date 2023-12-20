import { motion } from "framer-motion";
import searchIcon from "/public/assets/icon-search.svg";

function InputField() {
  return (
    <form id="inputField">
      <img src={searchIcon} alt="search icon" />
      <input type="text" placeholder="Search GitHub username…" />
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
