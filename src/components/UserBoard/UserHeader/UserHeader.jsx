// import React from 'react'

import { useThemeContext } from "../../../context/context";

function UserHeader({ getName, getUserName, getJoinedTime, getBio, getProfileLink }) {
  const { theme } = useThemeContext();
  return (
    <div className={`user-section-header ${theme ? "dark" : ""}`}>
      <div className="user-section-left">
        <div className="name-username">
          <h2>{getName}</h2>
          <a target="_blank" rel="noreferrer" href={getProfileLink}>{getUserName}</a>
        </div>
        <h3>{getJoinedTime}</h3>
      </div>
      <p>{getBio === null ? "This profile has no bio" : getBio}</p>
    </div>
  );
}

export default UserHeader;
