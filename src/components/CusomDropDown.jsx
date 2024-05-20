import React, { useState } from "react";
// const options = ['Interview Questions', 'Bug Report', 'Feature Request']

const CustomDropDown = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionSelect = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };
  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div
      onClick={toggleDropdown}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "48px",
        backgroundColor: "#E0E0E0",
        borderRadius: "8px",
        padding: "0px 12px 0px 12px",
        position: "relative",
        color: "#333333",
      }}
      
    >
      {selectedOption}
      {isOpen ? (
        <svg
          width="21"
          height="12"
          viewBox="0 0 21 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.42651 10.9666C2.33104 11.0568 2.21873 11.1273 2.096 11.1742C1.97327 11.221 1.84252 11.2432 1.71122 11.2394C1.57992 11.2357 1.45064 11.2062 1.33075 11.1525C1.21086 11.0988 1.10273 11.0221 1.01251 10.9266C0.922289 10.8311 0.851759 10.7188 0.804943 10.5961C0.758128 10.4734 0.735943 10.3426 0.739658 10.2113C0.743372 10.08 0.772912 9.95072 0.826591 9.83083C0.880269 9.71095 0.957036 9.60281 1.05251 9.51259L10.0525 1.01259C10.2382 0.837055 10.484 0.739247 10.7395 0.739247C10.995 0.739247 11.2408 0.837055 11.4265 1.01259L20.4275 9.51259C20.5251 9.60221 20.6039 9.71033 20.6593 9.83066C20.7147 9.95098 20.7457 10.0811 20.7504 10.2135C20.7551 10.3459 20.7334 10.4779 20.6867 10.6019C20.6399 10.7258 20.569 10.8393 20.4781 10.9356C20.3871 11.0319 20.2779 11.1092 20.1568 11.163C20.0358 11.2167 19.9052 11.2459 19.7728 11.2488C19.6403 11.2517 19.5086 11.2282 19.3853 11.1798C19.262 11.1313 19.1496 11.0589 19.0545 10.9666L10.7395 3.11459L2.42651 10.9666Z"
            fill="#333333"
          />
        </svg>
      ) : (
        <svg
          width="21"
          height="12"
          viewBox="0 0 21 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5735 1.03341C18.669 0.943191 18.7813 0.872661 18.904 0.825845C19.0267 0.77903 19.1575 0.756845 19.2888 0.76056C19.4201 0.764274 19.5494 0.793814 19.6693 0.847493C19.7891 0.901172 19.8973 0.977938 19.9875 1.07341C20.0777 1.16888 20.1482 1.28119 20.1951 1.40392C20.2419 1.52664 20.2641 1.65739 20.2603 1.78869C20.2566 1.92 20.2271 2.04928 20.1734 2.16917C20.1197 2.28905 20.043 2.39719 19.9475 2.48741L10.9475 10.9874C10.7618 11.1629 10.516 11.2608 10.2605 11.2608C10.005 11.2608 9.75916 11.1629 9.57349 10.9874L0.572493 2.48741C0.474932 2.39779 0.396149 2.28967 0.340725 2.16934C0.285301 2.04902 0.254337 1.91888 0.249634 1.78648C0.24493 1.65409 0.266581 1.52208 0.313326 1.39812C0.360071 1.27417 0.430981 1.16073 0.521935 1.06441C0.612888 0.968091 0.722076 0.890803 0.843153 0.837037C0.96423 0.783271 1.09478 0.754098 1.22723 0.751214C1.35968 0.748329 1.49138 0.77179 1.61468 0.820234C1.73798 0.868678 1.85043 0.941139 1.94549 1.03341L10.2605 8.88541L18.5735 1.03341Z"
            fill="#333333"
          />
        </svg>
      )}

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#E0E0E0",
            boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
            zIndex: 1,
            overflowY: "auto",
            height: "214px",
            marginTop: "5px",
            marginBottom: "0px",
            
          }}
          className="scroll-container"
        >
          {options &&
            options.map((option, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleOptionSelect(option)}
                style={{
                  padding: "18px 16px 18px 16px",
                  borderBottom: "2px solid #CCCCCC ",
                  cursor: "pointer",
                  color: "#333333",
                  backgroundColor:
                    isHovered === index ? "#CCCCCC" : "transparent",
                }}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  dropdown: {
    position: "relative",
    width: "200px",
  },
  dropdownHeader: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  icon: {
    marginLeft: "10px",
  },
  dropdownList: {
    position: "absolute",
    top: "100%",
    left: "0",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
    zIndex: 1,
  },
  dropdownOption: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },
};

export default CustomDropDown;
