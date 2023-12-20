// import React from 'react'

import { useThemeContext } from "../../../context/context";

function UserMidd({ getRepos, getFollowers, getFollowings }) {
  const { theme } = useThemeContext();
  return (
    <div className={`user-section-middle ${theme ? "dark" : ""}`}>
      <div className="repo">
        Repos
        <h3>{getRepos}</h3>
      </div>
      <div className="followers">
        Followers
        <h3>{getFollowers}</h3>
      </div>
      <div className="following">
        Following
        <h3>{getFollowings}</h3>
      </div>
    </div>
  );
}

export default UserMidd;
