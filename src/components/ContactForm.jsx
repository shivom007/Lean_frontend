/* eslint-disable react/prop-types */
import  { useState} from "react";

const ContactForm = ({setMessage, handleClose, setIsSubmitted}) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Thanks for reaching out to us! We will get back to you as soon as possible.")
    setIsSubmitted(true)
    console.log({name,details})
    handleClose()
  };

  return (
    <div
      style={{
        height: "476px",
        display: "flex",
        flexDirection: "column",
        width: "430px",
        padding: "24px 16px 24px 16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        fontFamily: "Poppins",
        fontWeight: "500",
        color: "#F8F8F8",
        justifyContent: "space-around",
        boxShadow: "-2px 4px 16px #00000029",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "398px",
          height: "72px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#4D4D4D",
            fontFamily: "Poppins",
            fontWeight: "600",
            margin: "0",
            width: "320px",
          }}
        >
          Get in <strong style={{ color: "black" }}>Contact with us</strong> for
          your queries!
        </h1>
      </div>

      <hr
        style={{
          margin: "10px 0",
          border: "none",
          borderTop: "2px solid #ddd",
        }}
      />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{ gap: "8px", display: "flex", flexDirection: "column" }}>
          <label
            style={{
              fontSize: "18px",
              color: "#4D4D4D",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            Your Name
          </label>
          <input
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "18px",
              color: "#808080",
              border: "none",
              outline: "none",
              backgroundColor: "#E0E0E0",
              borderRadius: "8px",
              width: "396px",
              height: "48px",
              padding: "0 16px 0 16px",
              boxShadow: "1px 1px 8x #00000080",
            }}
            type="text"
            name=""
            id="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div
          style={{
            height: "222px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <label
            style={{
              fontSize: "18px",
              color: "#4D4D4D",
              fontFamily: "Poppins",
              fontWeight: "500",
              gap: "2px",
            }}
          >
            What would you like to ask? <span style={{ color: "red" }}>*</span>
          </label>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "222px",
              gap: "32px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "120px",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "8px",
                border: "1px solid #CCCCCC",
                backgroundColor: "#E0E0E0",
                padding: "12px 16px 12px 16px",
              }}
            >
              <textarea
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#808080",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  height: "96px",
                  resize: "none",
                  width: "372px",
                  overflowY: "scroll",
                }}
                className="scroll-container"
                type="text"
                
                placeholder="Write Here...."
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <button
              type="submit"
              
              style={{
                position: "absolute",
                right: "0px",
                bottom: "0px",
                height: "40px",
                width: "114px",
                borderRadius: "4px",
                border: "none",
                color: "#fff",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "500",
                cursor: details.length > 0 ? "pointer" : "not-allowed",
                pointerEvents: details.length > 0 ? "auto":"none",
                backgroundColor: details.length > 0 ? "#0F0F0F" : "#6C6C6C"
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
