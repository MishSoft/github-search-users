// import React from 'react'
import { motion } from "framer-motion";
import UserHeader from "./UserHeader/UserHeader";
import UserMidd from "./UserMid/UserMidd";
import UserFooter from "./UserFooter/UserFooter";
import { useThemeContext } from "../../context/context";

function UserBoard({ userData }) {
  const { theme } = useThemeContext();
  // Extract only the date portion (YYYY-MM-DD) from the ISO date string
  const formatDate = (isoDateString) => isoDateString.slice(0, 10);
  console.log(userData);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`user-board ${theme ? "dark" : ""}`}
    >
      <div className="image-section">
        <img src={userData.avatar_url ? userData.avatar_url : "https://hope.be/wp-content/uploads/2015/05/no-user-image.gif"} />
      </div>
      <div className="user-section">
        <UserHeader
          getName={userData.name == null ? "Server Error" : userData.name}
          getUserName={userData.login == null ? "" : userData.login}
          getJoinedTime={userData.created_at ? formatDate(userData.created_at) : ""} 
          getBio={userData.bio}
          getProfileLink={userData.html_url}
        />
        <UserMidd
          getRepos={userData.public_repos == null ? 0 : userData.public_repos}
          getFollowers={userData.followers == null ? 0 : userData.followers}
          getFollowings={userData.following == null ? 0 : userData.following}
        />
        <UserFooter
          getLocation={userData.location == null ? "Not Available" : userData.location}
          getSocialName={userData.twitter_username == null ? "Not Available" : userData.twitter_username}
          getWebsiteLink={userData.websiteLink == null ? "#" : userData.websiteLink}
          getWebsiteName={userData.websiteName == null ? "Not Available" : userData.websiteName}
          getCompany={userData.company == null ? "Not Available" : userData.company}
        />
      </div>
    </motion.div>
  );
}

export default UserBoard;
