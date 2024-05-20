import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import FloatingBoxAction from "./components/FloatingBoxAction";
import SpeechBubble from "./components/SpeechBubble";
function App() {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
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
