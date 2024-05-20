/* eslint-disable react/prop-types */


const Suggestion = ({handleFormShow, selectedForm  }) => {
  return (
    <div
    onClick={handleFormShow}
    style={{
        display: "flex",
        backgroundColor: "white",
        padding: "8px",
        borderRadius: "32px",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: selectedForm === 3 ?  "4px solid black" : "none",
        outline: selectedForm === 3 ? "3px solid #808080": "none",
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="-4 -10 32 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0V3.5756H19.6658V0H0ZM0 7.15119V10.7268H19.6658V7.15119H0ZM30.3926 7.32997C30.2138 7.32997 29.8562 7.50875 29.6775 7.68753L27.8897 9.47533L31.644 13.2297L33.4318 11.4419C33.7894 11.0843 33.7894 10.3692 33.4318 10.0117L31.1077 7.68753C30.9289 7.50875 30.7501 7.32997 30.3926 7.32997ZM26.9958 10.548L16.0902 21.2748V25.0292H19.8446L30.7501 14.1236L26.9958 10.548ZM0 14.3024V17.878H12.5146V14.3024H0Z"
          fill="#0F0F0F"
        />
      </svg>
    </div>
  );
};

export default Suggestion;
