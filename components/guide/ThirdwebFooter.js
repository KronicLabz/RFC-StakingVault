import styles from "../../styles/Thirdweb.module.css";
import React from "react";

export default function ThirdwebFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -210,
          left: -140,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #000000",
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open("https://https://thirdweb.com/", "_blank")}

      />
    </>
  );
}
