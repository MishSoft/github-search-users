import searchIcon from "/public/assets/icon-search.svg"

function InputField() {
  return (
    <form id="inputField">
        <img src = {searchIcon} alt="search icon" />
        <input type="text" placeholder="Search GitHub username…" />
        <button type="submit">Search</button>
    </form>
  );
}

export default InputField;
