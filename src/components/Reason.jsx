/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Reason = ({ onClick }) => {
  const [iconShow, setIconShow] = useState(false);

  useEffect(() => {
    if (!iconShow) {
      let timer = setTimeout(() => setIconShow(true), 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        maxheight: "900px",
        width: "320px",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "12px",
        justifyContent: "center",
        gap: "32px",
        flexDirection: "column",
        padding: "26px",
      }}
    >
      <p
        style={{
          display: "flex",
          textAlign: "center",
          fontSize: "12px",
          color: "#4D4D4D",
          fontFamily: "Poppins",
          flexDirection: "column",
          fontWeight: "600",
          margin: "0",
        }}
      >
        Thank you for taking out your time to understand why this page is not
        developed for mobile devices.
        <br />
        <span style={{ color: "black", fontSize:'18px' }}>Reason :</span> I have my classes going
        from 8am in the morning to 6pm in the evening daily except for sunday
        and also I had seen the mail one day later. I only get the time to do
        anything after 6:30pm when i reached my room. From the limited time I have developed this page focusing on desktop devices only.
      </p>

      <div
        onClick={onClick}
        style={{
          position: "absolute",
          display: iconShow ? "block" : "none",
          height: "32px",
          width: "32px",
          top: "-12px",
          right: "-12px",
          backgroundColor: "black",
          borderRadius: "24px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="-1 -6 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6665 1.6665L8.33317 8.33317M1.6665 8.33317L8.33317 1.6665"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Reason;
