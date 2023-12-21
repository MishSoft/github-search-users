import { useState } from "react";
import Header from "./components/Header/Header";
import UserBoard from "./components/UserBoard/UserBoard";
import { ThemeProvider } from "./context/context";

function App() {
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [userData, setUserData] = useState({});

  return (
    <ThemeProvider>
      <div className="container">
        <Header setUserData={setUserData} checkActiveBoard={setShowUserBoard} />
        {showUserBoard && <UserBoard userData={userData} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
