/* eslint-disable react/prop-types */
// import React from 'react'

const Close = ({onClick}) => {
  return (
    <div
    onClick={onClick}
        style={{
          display: "flex",
          backgroundColor: "white",
          height:'56px',
          width:'56px',
          padding: "8px",
          borderRadius: "32px",
          alignItems: "center",
          justifyContent: "center",
          cursor:'pointer'
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 -2 40 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99976 10.0015L29.9998 30.0009M9.99976 30.0009L29.9998 10.0015"
            stroke="#0F0F0F"
            strokeWidth="3.99994"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
  )
}

export default Close