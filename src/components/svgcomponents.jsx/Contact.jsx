// import React from "react";

const Contact = ({ handleFormShow, selectedForm }) => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        backgroundColor: "white",
        padding: "8px",
        border: selectedForm === 4 ?  "4px solid black" : "none",
        
        borderRadius: "32px",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        outline: selectedForm === 4 ? "3px solid #808080": "none",
      }}
      onClick={handleFormShow}
    >
      <svg
        width="40"
        height="40"
        viewBox="-2 -10 28 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.97895 0.0395927C2.69728 0.0829277 2.12853 0.288759 1.81436 0.45126C1.38645 0.678759 0.676862 1.38834 0.449362 1.81626C0.357279 1.99501 0.221862 2.30917 0.151445 2.52042L0.0268619 2.89959V7.47667C0.0268619 12.4329 0.0214452 12.2975 0.324779 12.98C0.720195 13.8575 1.6302 14.67 2.4752 14.8921L2.7027 14.9517L2.71895 16.0783C2.7352 17.3296 2.7677 17.4433 3.10353 17.6546C3.3202 17.79 3.6777 17.8062 3.88895 17.6925C3.9702 17.6492 4.60936 17.0371 5.30811 16.3383L6.58103 15.06H6.8302H7.08478L7.11186 13.7979C7.13353 12.7092 7.14978 12.4871 7.2527 12.1404C7.77811 10.3583 9.09978 9.03666 10.8873 8.495C11.2881 8.37583 11.326 8.37583 15.1556 8.35417L19.0123 8.33791V5.7C19.0123 2.80751 19.0014 2.68834 18.6819 2.02209C18.346 1.31792 17.7664 0.738342 17.0352 0.375427C16.2498 -0.0145721 16.5748 0.00167656 9.47895 0.0125103C5.97978 0.0125103 3.05478 0.0287609 2.97895 0.0395927Z"
          fill="black"
        />
        <path
          d="M11.3314 10.0772C10.1072 10.3967 9.14308 11.3772 8.8235 12.6121C8.726 12.9967 8.72058 13.2459 8.72058 17.4438C8.72058 20.3309 8.74225 21.9776 8.78016 22.1888C8.80725 22.3621 8.94808 22.7413 9.0835 23.023C9.506 23.895 10.2643 24.545 11.2393 24.8755L11.6185 25L16.3852 25.0163L21.1518 25.0325L22.4789 26.3488C23.8927 27.7571 23.9522 27.8005 24.3693 27.7084C24.5589 27.6705 24.8297 27.4592 24.9327 27.2805C24.976 27.2046 25.0085 26.7821 25.0247 26.0346L25.0518 24.9025L25.2685 24.8375C25.6314 24.7292 26.1352 24.4475 26.4818 24.1605C27.0939 23.6513 27.5597 22.8117 27.6789 22.0155C27.7114 21.7934 27.7331 19.9138 27.7331 17.3896C27.7331 12.6338 27.7385 12.7096 27.3593 11.9459C26.9964 11.2147 26.4168 10.6351 25.7127 10.2992C24.9977 9.95799 25.3064 9.96882 18.1997 9.97424C12.0031 9.97424 11.7106 9.97965 11.3314 10.0772Z"
          fill="black"
        />
      </svg>
      {/* <div
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          width: "60px",
          height: "60px",
          borderRadius: "54px",
          backgroundColor: "#808080",
          zIndex: -1,
        }}
      ></div> */}
    </div>
  );
};

export default Contact;
