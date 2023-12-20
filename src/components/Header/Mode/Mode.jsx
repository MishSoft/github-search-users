// import sunIcon from "/public/assets/icon-sun.svg"
import moonIcon from "/public/assets/icon-moon.svg";

function Mode() {
  return (
    <div className="mode-component">
      <span>Dark</span>
      <img src={moonIcon} alt="mode-image" />
    </div>
  );
}

export default Mode;
