// import React from 'react'

import { useThemeContext } from "../../../context/context";

function UserHeader({ getName, getUserName, getJoinedTime, getBio }) {
  const { theme } = useThemeContext();
  return (
    <div className={`user-section-header ${theme ? "dark" : ""}`}>
      <div className="user-section-left">
        <div className="name-username">
          <h2>{getName}</h2>
          <a href="#">{getUserName}</a>
        </div>
        <h3>{getJoinedTime}</h3>
      </div>
      <p>{getBio}</p>
    </div>
  );
}

export default UserHeader;
