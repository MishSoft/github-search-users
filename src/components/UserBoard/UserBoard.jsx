// import React from 'react'
import { motion } from "framer-motion";
import UserHeader from "./UserHeader/UserHeader";
import UserMidd from "./UserMid/UserMidd";
import UserFooter from "./UserFooter/UserFooter";

function UserBoard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="user-board"
    >
      <div className="image-section">
        <img src="https://i.stack.imgur.com/frlIf.png" />
      </div>
      <div className="user-section">
        <UserHeader />
        <UserMidd />
        <UserFooter />
      </div>
    </motion.div>
  );
}

export default UserBoard;
