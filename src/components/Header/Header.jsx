import InputField from "./InputField/InputField";
import Mode from "./Mode/Mode";

function Header() {
  return (
    <div className="header-component-header">
        <div className="title-mode">
            <h1>devfinder</h1>
            <Mode/>
        </div>
        <InputField/>
    </div>
  );
}

export default Header;
