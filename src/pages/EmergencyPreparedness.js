import React, { useState } from "react";
import Navbar from "../Navbar";

function Preparedness() {
  const [checkedItems, setCheckedItems] = useState({});
  const [expanded, setExpanded] = useState({});

  // Toggle checklist items
  const toggleCheck = (item) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  // Toggle expanded sections
  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Styling
  const styles = {
    container: {
      backgroundColor: "#121212",
      color: "#f5f5f5",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    section: {
      backgroundColor: "#1e1e1e",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
      width: "90%",
      maxWidth: "500px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    checklist: {
      listStyle: "none",
      paddingLeft: 0,
    },
    checklistItem: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#2a2a2a",
      borderRadius: "5px",
      marginBottom: "10px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    icon: {
      fontSize: "1.5rem",
      marginRight: "10px",
      transition: "transform 0.3s ease",
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={{ color: "#ffcc00", textTransform: "uppercase", textAlign: "center" }}>
          🛠️ Emergency Preparedness
        </h2>
        <p style={{ textAlign: "center", color: "#b0b0b0", fontSize: "1.2rem" }}>
          Stay ready for any disaster with these essential steps.
        </p>

        {/* Expandable Sections */}
        {[
          { title: "🏡 Home Safety", content: "Ensure fire alarms, emergency exits, and first-aid kits are ready." },
          { title: "📦 Emergency Kit", content: "Pack water, food, flashlight, batteries, and a first-aid kit." },
          { title: "📞 Communication Plan", content: "Keep emergency contacts handy and discuss evacuation plans." },
          { title: "🛑 Earthquake Safety", content: "Drop, Cover, and Hold during an earthquake." },
          { title: "🔥 Fire Escape Plan", content: "Know exit routes and practice fire drills regularly." },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.section,
              backgroundColor: expanded[item.title] ? "#292929" : "#1e1e1e",
            }}
            onClick={() => toggleExpand(item.title)}
          >
            <h4>
              {item.title}{" "}
              <span style={{ float: "right", transform: expanded[item.title] ? "rotate(180deg)" : "rotate(0deg)" }}>
                🔽
              </span>
            </h4>
            {expanded[item.title] && <p>{item.content}</p>}
          </div>
        ))}

        {/* Preparedness Checklist */}
        <h3 style={{ marginTop: "20px", textAlign: "center", color: "#ffcc00" }}>✔️ Checklist</h3>
        <ul style={styles.checklist}>
          {[
            "Stock up on non-perishable food & water",
            "Have a flashlight and extra batteries",
            "Store emergency contacts in your phone",
            "Keep a fire extinguisher at home",
            "Prepare an evacuation bag",
          ].map((item, index) => (
            <li
              key={index}
              style={{
                ...styles.checklistItem,
                backgroundColor: checkedItems[item] ? "#4caf50" : "#2a2a2a",
              }}
              onClick={() => toggleCheck(item)}
            >
              <span style={{ ...styles.icon, transform: checkedItems[item] ? "scale(1.2)" : "scale(1)" }}>
                {checkedItems[item] ? "✅" : "🔲"}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Preparedness;



