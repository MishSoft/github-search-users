import { useThemeContext } from "../../../context/context";
import LocationsIcon from "./Icons/LocationsIcon";
import SocialIcon from "./Icons/SocialIcon";
import LinkIcon from "./Icons/LinkIcon";
import ComapnyIcon from "./Icons/ComapnyIcon";
function UserFooter({ getLocation, getSocialLink, getSocialName, getWebsiteName, getWebsiteLink, getCompany }) {
  const { theme } = useThemeContext();
  return (
    <div className={`user-section-footer ${theme ? "dark" : ""}`}>
      <div className="location">
        <LocationsIcon theme={theme} />
        {getLocation}
      </div>
      <div className="social">
        <SocialIcon theme={theme} />
        <a href={getSocialLink}>{getSocialName}</a>
      </div>
      <div className="link">
        <LinkIcon theme={theme} />
        <a href={getWebsiteLink}>{getWebsiteName}</a>
      </div>
      <div className="company">
        <ComapnyIcon theme={theme}/>
        {getCompany}
      </div>
    </div>
  );
}

export default UserFooter;
