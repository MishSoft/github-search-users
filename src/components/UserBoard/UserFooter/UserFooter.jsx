// import React from 'react'
import locationIcon from "/public/assets/icon-location.svg";
import socialIcon from "/public/assets/icon-twitter.svg";
import linkIcon from "/public/assets/icon-website.svg";
import companyIcon from "/public/assets/icon-company.svg";
function UserFooter() {
  return (
    <div className="user-section-footer">
      <div className="location">
        <img src={locationIcon} />
        Tbilisi
      </div>
      <div className="social">
        <img src={socialIcon} />
        Not Available
      </div>
      <div className="link">
        <img src={linkIcon} />
        <a href="#">Link</a>
      </div>
      <div className="company">
        <img href={companyIcon} />
        Company
      </div>
    </div>
  );
}

export default UserFooter;
