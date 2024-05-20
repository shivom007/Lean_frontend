

const Report = ({handleFormShow,selectedForm}) => {
  return (
    <div style={{
        display: "flex",
        backgroundColor: "white",
        padding: "8px",
        borderRadius: "32px",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        outline: selectedForm === 1 ? "3px solid #808080": "none",
        border: selectedForm === 1 ?  "4px solid black" : "none",
      }}
      onClick={handleFormShow}
      >
      <svg
        width="40"
        height="40"
        viewBox="-8 -12 32 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.453613 12.002V24.002H2.15674H2.85986V19.6285V15.2504L3.2208 15.0723C5.46611 13.9801 8.00205 13.8676 10.2661 14.7676C10.5286 14.8707 11.1896 15.1848 11.7333 15.466C12.2817 15.7473 12.938 16.0613 13.2005 16.1645C15.4411 17.0551 17.8036 17.1254 20.0864 16.3707C20.5083 16.2301 21.0614 15.9957 21.6333 15.7051L22.5239 15.2598L22.538 8.07852L22.5474 0.897264L21.9755 1.23008C20.0208 2.35039 18.6567 2.76758 16.9224 2.76758C16.1255 2.76758 15.4646 2.6832 14.7239 2.48164C13.9599 2.28008 13.4864 2.0832 12.1646 1.4082C10.9317 0.784765 10.3692 0.559765 9.45049 0.330078C8.02549 -0.030859 6.39424 -0.0496101 4.93643 0.278515C4.39736 0.400391 3.71299 0.616016 3.23018 0.822266L2.85986 0.976952V0.489452V0.00195312H2.15674H0.453613V12.002Z"
          fill="#0F0F0F"
        />
      </svg>
    </div>
  );
};

export default Report;
