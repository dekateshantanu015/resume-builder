import React, { useState } from "react";
import "./App.css";
import "@fontsource/inter";
import IntroPage from "./components/IntroPage";
import MainPage from "./components/MainPage";

function App() {
  const [showIntroPage, setShowIntroPage] = useState(true);

  const handleGetStarted = () => {
    setShowIntroPage(false); // Switch to MainPage
  };

  const handleGoBack = () => {
    setShowIntroPage(true); // Switch back to IntroPage
  };

  return (
    <div className="App">
      {showIntroPage ? (
        <IntroPage getStartedFn={handleGetStarted} />
      ) : (
        <MainPage />
      )}
      {!showIntroPage && <button onClick={handleGoBack}>Go Back</button>}
    </div>
  );
}

export default App;
