/* eslint-disable react/prop-types */
// import React from 'react'

const NoDisplay = ({onClick}) => {
  return (
    <div
      style={{
        display: "flex",
        maxheight: "900px",
        width: "340px",
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
          fontSize: "22px",
          color: "#4D4D4D",
          fontFamily: "Poppins",
          flexDirection: "column",
          fontWeight: "600",
          margin: "0",
          lineHeight:'30px'
        }}
      >
        This Website is currently developed for Desktop devices. Please do visit
        the website in your desktop browser. 
        <br /> If interested in knowing the reason.
      </p>
      
      <span 
      onClick={onClick}
        style={{
          display: "flex",
          textAlign: "center",
          fontSize: "18px",
          color: "white",
          fontFamily: "Poppins",
          cursor: "pointer",
          padding: '12px',
          backgroundColor: 'black',
          fontWeight: "500",
          margin: "0",
          borderRadius: '8px'
        }}
      >
        click here!
      </span>
    </div>
  );
};

export default NoDisplay;
