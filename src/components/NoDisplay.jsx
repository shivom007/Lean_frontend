// import React from 'react'

const NoDisplay = () => {
  return (
    <div
      style={{
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
        the website in your desktop browser. 
        {/* <br /> If interested in knowing the reason. */}
      </p>
      
      {/* <span
        style={{
          display: "flex",
          textAlign: "center",
          fontSize: "16px",
          color: "white",
          fontFamily: "Poppins",
          cursor: "pointer",
          padding: '8px',
          backgroundColor: 'blue',
          fontWeight: "500",
          margin: "0",
          borderRadius: '8px'
        }}
      >
        click here!
      </span> */}
    </div>
  );
};

export default NoDisplay;
