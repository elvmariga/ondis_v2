import React from "react";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"; 


export const ScrollUp = () => {
  return (
    <div>
      <ScrollUpButton
        style={{
          backgroundColor: "#E8303A",
          border: "4px solid #E8303A",
          borderRadius: "8px",
          right: "1rem",
          zIndex: "2",
        }}
      />
    </div>
  );
}


