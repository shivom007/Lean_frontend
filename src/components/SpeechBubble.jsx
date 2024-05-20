/* eslint-disable react/prop-types */


const SpeechBubble = ({ children }) => {
  return (
    <div style={{ display: "inline-flex",  maxWidth:'480px', maxHeight:'88px' }}>
      <div
        style={{
          position:'relative',
          textAlign: 'center',
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "100%", 
          fontFamily:"Poppins",
          fontWeight:'600',
          fontSize:'18px'
        }}
      >
        {children}
        <div
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "12px",
          borderColor: "transparent",
          borderTopColor: "#fff",
          right: "24px", 
          bottom: "-24px", 
        }}
      ></div>
      </div>
      
    </div>
  );
};

export default SpeechBubble;
