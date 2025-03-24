import React from "react";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(to right, #004d40, #00251a)", // Elegant dark gradient
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        {/* Title with Animation */}
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#ffeb3b",
            letterSpacing: "2px",
            animation: "fadeIn 1.5s ease-in-out",
          }}
        >
          AI Disaster Relief
        </h1>

        {/* Subtitle with Smooth Appearance */}
        <p
          style={{
            fontSize: "1.4rem",
            color: "#e0f2f1",
            maxWidth: "700px",
            lineHeight: "1.6",
            marginBottom: "20px",
            animation: "slideIn 1.5s ease-in-out",
          }}
        >
          Your trusted solution for emergency assistance and disaster response.  
          Harnessing AI to deliver
        </p>

        {/* Image with Glow Effect */}
        <img
          src="https://artificialpaintings.com/wp-content/uploads/2024/06/549_the_role_of_AI_in_disaster_management.webp"
          alt="Disaster Relief"
          style={{
            width: "85%",
            maxWidth: "900px",
            borderRadius: "20px",
            boxShadow: "0px 10px 20px rgba(255, 235, 59, 0.4)", // Soft yellow glow
            transition: "transform 0.5s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        />

        {/* Animated Buttons */}
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#ffeb3b",
              color: "#004d40",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "12px 24px",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "0.3s",
              margin: "10px",
              boxShadow: "0px 5px 15px rgba(255, 235, 59, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#ff9800";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#ffeb3b";
              e.target.style.transform = "scale(1)";
            }}
          >
            Learn More
          </button>

          <button
            style={{
              backgroundColor: "#e91e63",
              color: "#fff",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "12px 24px",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "0.3s",
              margin: "10px",
              boxShadow: "0px 5px 15px rgba(233, 30, 99, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#c2185b";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#e91e63";
              e.target.style.transform = "scale(1)";
            }}
          >
            Get Help Now
          </button>
        </div>
      </div>

      {/* Keyframes for Smooth Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </>
  );
}

export default Home;
