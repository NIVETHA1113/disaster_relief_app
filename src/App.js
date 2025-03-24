import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmergencyContacts from "./pages/EmergencyContacts";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import EmergencyPreparedness from "./pages/EmergencyPreparedness";
import Register from "./pages/Register";
import DisasterNews from "./pages/DisasterNews";
import LiveMap from "./pages/LiveMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/emergency-preparedness" element={<EmergencyPreparedness />} />
        <Route path="/register" element={<Register />} />
        <Route path="/disaster-news" element={<DisasterNews />} />
        <Route path="/live-map" element={<LiveMap />} />
      </Routes>
    </Router>
  );
}

export default App;

