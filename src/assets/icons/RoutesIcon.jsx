import React from "react";

function RoutesIcon({ width, height, className }) {
  return (
    <svg
      width={width}
      height={height}
      className={`${className}`}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.875 8.125L28.75 11.25V27.5L20 23.75L10 27.5L1.25 23.75V7.5L7.5 10L21.875 8.125ZM20 23.75V15V23.75ZM10 27.5V15V27.5ZM15 20.3413C15 20.3413 7.5 14.375 7.5 8.75C7.5 4.0625 11.25 1.25 15 1.25C18.75 1.25 22.5 4.0625 22.5 8.75C22.5 14.375 15 20.3413 15 20.3413ZM16.25 8.75C16.25 8.41848 16.1183 8.10054 15.8839 7.86612C15.6495 7.6317 15.3315 7.5 15 7.5C14.6685 7.5 14.3505 7.6317 14.1161 7.86612C13.8817 8.10054 13.75 8.41848 13.75 8.75C13.75 9.08152 13.8817 9.39946 14.1161 9.63388C14.3505 9.8683 14.6685 10 15 10C15.3315 10 15.6495 9.8683 15.8839 9.63388C16.1183 9.39946 16.25 9.08152 16.25 8.75Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}

export default RoutesIcon;
