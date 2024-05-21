import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import FloatingBoxAction from "./components/FloatingBoxAction";
import SpeechBubble from "./components/SpeechBubble";
import NoDisplay from "./components/NoDisplay";
import Reason from "./components/Reason";
function App() {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    const mobile = window.navigator.userAgentData.mobile;
    setIsMobile(mobile);
  };
  useEffect(() => {
    if (isSubmitted) {
      let timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSubmitted]);

  useEffect(() => {
    const intervalId = setInterval(checkMobile, 100);
    checkMobile(); 

    return () => clearInterval(intervalId); 
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#575656",
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>

        {isMobile && (
          <div
            style={{
              position: "absolute",
              display: "flex",
              height: "100vh",
              width: "100vw",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              backdropFilter: "blur(10px)",
              zIndex: "9999",
            }}
          >
            <NoDisplay />
            
             {/* <Reason/> */}
          </div>
        )}

        {isSubmitted && (
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: "20px",
              bottom: "100px",
              zIndex: "9",
            }}
          >
            <SpeechBubble>{message}</SpeechBubble>
          </div>
        )}
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "20px",
            bottom: "20px",
            zIndex: "9",
          }}
        >
          <FloatingBoxAction
            setIsSubmitted={setIsSubmitted}
            setMessage={setMessage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
