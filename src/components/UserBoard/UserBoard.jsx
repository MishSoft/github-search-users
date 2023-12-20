// import React from 'react'
import { motion } from "framer-motion";
import UserHeader from "./UserHeader/UserHeader";
import UserMidd from "./UserMid/UserMidd";
import UserFooter from "./UserFooter/UserFooter";
import { useThemeContext } from "../../context/context";

function UserBoard({ userData }) {
  const { theme } = useThemeContext();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`user-board ${theme ? "dark" : ""}`}
    >
      <div className="image-section">
        <img src={userData.image} />
      </div>
      <div className="user-section">
        <UserHeader
          name={userData.name}
          userName={userData.userName}
          joinedTime={userData.joinedTime}
          bio={userData.bio}
        />
        <UserMidd
          repos={userData.repos}
          followers={userData.followers}
          followings={userData.followings}
        />
        <UserFooter
          location={userData.location}
          socialLink={userData.socialLink}
          socialName={userData.socialName}
          websiteLink={userData.websiteLink}
          websiteName={userData.websiteName}
          company={userData.company}
        />
      </div>
    </motion.div>
  );
}

export default UserBoard;
