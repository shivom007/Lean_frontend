// import React from 'react'

const Reason = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        maxheight: "900px",
        width: "360px",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "12px",
        justifyContent: "center",
        gap: "32px",
        flexDirection: "column",
        paddingTop: "24px",
        paddingBottom: "24px",
      }}
    >
      <p
        style={{
          display: "flex",
          textAlign: "center",
          fontSize: "24px",
          color: "#4D4D4D",
          fontFamily: "Poppins",
          flexDirection: "column",
          fontWeight: "600",
          margin: "0",
        }}
      >
        This Website is currently developed for Desktop devices. Please do visit
        the website in your desktop browser. <br /> If interested in knowing the
        reason.
      </p>

      <span
        style={{
          display: "flex",
          textAlign: "center",
          fontSize: "16px",
          color: "white",
          fontFamily: "Poppins",
          cursor: "pointer",
          padding: "8px",
          backgroundColor: "blue",
          fontWeight: "500",
          margin: "0",
          borderRadius: "8px",
        }}
      >
        click here!
      </span>
      <div
        // onClick={() => handleImageClick(index)}
        style={{
          position: "absolute",
          height: "32px",
          width: "32px",
          top: "2px",
          right: "2px",
          backgroundColor: "transparent",
          borderRadius: "24px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 -8 16 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6665 1.6665L8.33317 8.33317M1.6665 8.33317L8.33317 1.6665"
            stroke="black"
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
