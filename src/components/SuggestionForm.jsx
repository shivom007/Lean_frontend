/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import CustomDropDown from "./CusomDropDown";

const SuggestionForm = ({setMessage, handleClose, setIsSubmited}) => {
  const [section, setSection] = useState("Interview Questions");
  const [details, setDetails] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const fileInputRef = useRef(null);
  const handleSectionChange = (value) => {
    setSection(value);
  };

  const handleInput = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    const newSelectedFiles = [...selectedFiles];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newSelectedFiles.push(file);
  
      if (file && file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        setImageUrls((prevUrls) => [...prevUrls, url]);
      } else {
        setImageUrls((prevUrls) => [...prevUrls, null]);
      }
    }
  
    setSelectedFiles(newSelectedFiles);
  };
  
  const handleImageClick = (index) => {
    setSelectedFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  
    setImageUrls((prevUrls) => {
      const newUrls = [...prevUrls];
      newUrls.splice(index, 1);
      return newUrls;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Thanks for your valuable Suggestion!")
    setIsSubmited(true)
    handleClose()
  };

  return (
    <div
      style={{
        height: "536px",
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
      <h2
        style={{
          textAlign: "center",
          fontSize: "20px",
          color: "#4D4D4D",
          fontFamily: "Poppins",
          fontWeight: "600",
        }}
      >
        Let us know about the <strong style={{ color: "black" }}>Issue</strong>{" "}
        you Suggestion right now!
      </h2>
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
            Choose a section
          </label>
          <CustomDropDown
            options={["Interview Questions", "Bug Report", "Feature Request"]}
            selectedOption={section}
            onOptionSelect={handleSectionChange}
          />
        </div>
        <div
          style={{
            height: "282px",
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
            Describe the issue in detail <span style={{ color: "red" }}>*</span>
          </label>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "252px",
              gap: "32px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "180px",
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
                name=""
                id=""
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Write Here...."
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "40px",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={handleInput}
                  type="button"
                  style={{
                    display: "flex",
                    gap: "8px",
                    width: "102px",
                    alignItems: "center",
                    padding: "8px 12px 8px 12px",
                    borderRadius: "4px",
                    border: "none",
                    height: "32px",
                    fontSize: "16px",
                    backgroundColor: "#C7C7C7",
                    cursor: "pointer",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    color: "#333333",
                  }}
                >
                  <svg
                    width="10"
                    height="20"
                    viewBox="0 -2 11 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49951 5.7478V16.3278C9.49951 18.4178 7.96951 20.2778 5.88951 20.4778C5.33386 20.5333 4.77274 20.4717 4.24239 20.2968C3.71204 20.122 3.22426 19.8379 2.81055 19.4628C2.39684 19.0878 2.0664 18.6301 1.84058 18.1194C1.61475 17.6086 1.49856 17.0562 1.49951 16.4978V4.1378C1.49951 2.8278 2.43951 1.6378 3.73951 1.5078C4.08815 1.47134 4.44055 1.50861 4.77385 1.61718C5.10715 1.72576 5.41389 1.90321 5.67415 2.13802C5.93442 2.37282 6.14241 2.65974 6.2846 2.98014C6.42679 3.30054 6.50001 3.64726 6.49951 3.9978V14.4978C6.49951 15.0478 6.04951 15.4978 5.49951 15.4978C4.94951 15.4978 4.49951 15.0478 4.49951 14.4978V5.7478C4.49951 5.3378 4.15951 4.9978 3.74951 4.9978C3.33951 4.9978 2.99951 5.3378 2.99951 5.7478V14.3578C2.99951 15.6678 3.93951 16.8578 5.23951 16.9878C5.58815 17.0243 5.94055 16.987 6.27385 16.8784C6.60715 16.7698 6.91389 16.5924 7.17415 16.3576C7.43442 16.1228 7.64241 15.8359 7.7846 15.5155C7.92679 15.1951 8.00001 14.8483 7.99951 14.4978V4.1678C7.99951 2.0778 6.46951 0.2178 4.38951 0.0177996C3.83401 -0.0369303 3.27321 0.0252682 2.7432 0.200391C2.2132 0.375514 1.72574 0.659679 1.3122 1.03459C0.898661 1.40951 0.568214 1.86687 0.34213 2.37722C0.116046 2.88757 -0.000664563 3.43961 -0.000488081 3.9978V16.2678C-0.000488081 19.1378 2.09951 21.7078 4.95951 21.9778C8.24951 22.2778 10.9995 19.7178 10.9995 16.4978V5.7478C10.9995 5.3378 10.6595 4.9978 10.2495 4.9978C9.83951 4.9978 9.49951 5.3378 9.49951 5.7478Z"
                      fill="#333333"
                    />
                  </svg>
                  <input
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    type="file"
                    name=""
                    id=""
                  />
                  Attach
                </button>
                <div style={{display:'flex', gap:'16px'}}>
              {imageUrls &&
                imageUrls.map((url, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        color: "#333333",
                        position: "relative",
                      }}
                    >
                      <img
                        src={url}
                        alt="Selected"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                      />
                      <div
                        onClick={() => handleImageClick(index)}
                        style={{
                          position: "absolute",
                          height: "16px",
                          width: "16px",
                          top: "-2px",
                          right: "-2px",
                          backgroundColor: "#00000099",
                          borderRadius: "24px",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 -8 16 32"
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
                })}
                </div>
              </div>
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
                pointerEvents: details.length > 0 ? "auto" : "none",
                backgroundColor: details.length > 0 ? "#0F0F0F" : "#6C6C6C",
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

export default SuggestionForm;
