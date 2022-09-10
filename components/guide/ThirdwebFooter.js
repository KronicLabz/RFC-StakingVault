import styles from "../../styles/Thirdweb.module.css";
import React from "react";

export default function KLabzFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 140,
          right: 100,
          height: -300,
          width: -150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #000000",
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open("https://https://kroniclabz.com/", "_blank")}
      />

      <div
        style={{
          position: "fixed",
          bottom: -12,
          right: -5,
        }}
      >
        <img
          src={"/K-Labz.png"}
          width={60}
          height={60}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://kroniclazb.com/", "_blank")}
        />
      </div>
    </>
  );
}
