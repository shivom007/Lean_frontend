
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "106px",
        width: "100%",
        padding: "16px 60px 16px 60px",
        backgroundColor: "black",
        border: "1px solid",
        boxShadow: "0px 4px 4px #FFFFFF40",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "space-between",
          color: "black",
        }}
      >
        <div>
          <h2
            style={{
              fontWeight: "500",
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            THE{" "}
            <span
              style={{
                backgroundColor: "white",
                padding: "0px 4px 0px 4px",
                color: "black",
                fontWeight: "600",
                borderRadius:'2px'
              }}
            >
              PRODUCT
            </span>{" "}
            PLATFORM
          </h2>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <h2
              style={{
                fontWeight: "500",
                fontFamily: "Montserrat",
                color: "#FEFEFE80",
                margin: 0,
              }}
            >
              Learn
            </h2>
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.7395 2L10.4034 10L18.3698 2"
                stroke="#FEFEFE"
                strokeOpacity="0.5"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <h2
              style={{
                fontWeight: "500",
                fontFamily: "Montserrat",
                color: "#FEFEFE80",
                margin: 0,
              }}
            >
              Practice
            </h2>
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.7395 2L10.4034 10L18.3698 2"
                stroke="#FEFEFE"
                strokeOpacity="0.5"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <circle cx="25" cy="25" r="25" fill="url(#pattern0_1_2662)" />
            <defs>
              <pattern
                id="pattern0_1_2662"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_1_2662" transform="scale(0.0078125)" />
              </pattern>
              <image
                id="image0_1_2662"
                width="128"
                height="128"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
