// import React, { useState } from "react";

// function AnimatedButton() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const rect = e.target.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     setMousePosition({ x, y });
//   };

//   return (
//     <div
//       className="container"
//       onMouseMove={handleMouseMove}
//       style={{
//         position: "relative",
//         width: "300px",
//         height: "200px",
//         overflow: "hidden",
//         border: "1px solid",
//         borderRadius: "full",
//       }}
//     >
//       <button
//         className="button"
//         style={{
//           position: "absolute",
//           width: "50px",
//           height: "50px",
//           background: "#4CAF50",
//           color: "#fff",
//           border: "none",
//           borderRadius: "50%",
//           cursor: "pointer",
//           transition: "0.1s",
//           willChange: "position",
//           top: mousePosition.y,
//           left: mousePosition.x,
//         }}
//       />
//     </div>
//   );
// }

// export default AnimatedButton;

import React, { useState } from "react";

function AnimatedButton() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        overflow: "hidden",
        border: "1px solid transparent",
        borderRadius: "full",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        className="button"
        style={{
          position: "absolute",
          width: "120px",
          height: "120px",
          background: "transparent", // No background color
          color: "#000", // Text color
          border: "2px solid #000", // Thin border
          borderRadius: "50%", // Circular shape
          cursor: "pointer",
          transition: "0.1s",
          willChange: "position",
          top: mousePosition.y - 60, // Center vertically
          left: mousePosition.x - 60, // Center horizontally
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "16px", // Font size for the text
        }}
      >
        LEARN MORE
      </button>
    </div>
  );
}

export default AnimatedButton;
