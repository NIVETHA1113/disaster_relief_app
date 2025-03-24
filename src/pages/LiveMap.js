import React from "react";

const LiveMap = () => {
  return (
    <div className="container mt-5">
      {/* Page Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Live Disaster Relief Map - Chennai</h2>
        <p className="text-muted">Track affected areas and relief centers in real time.</p>
      </div>

      {/* Alert Box for Important Notices */}
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Emergency Alert!</strong> Heavy rainfall expected in northern Chennai. Stay safe and follow government guidelines.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      {/* Map Section Inside a Bootstrap Card */}
      <div className="card shadow-lg border-0">
        <div className="card-body text-center">
          <h5 className="card-title text-dark">Current Status</h5>
          <p className="card-text text-secondary">
            Relief efforts are ongoing in various areas. Click on markers for details.
          </p>
          
          {/* Embedded OpenStreetMap */}
          <iframe
            width="100%"
            height="400"
            className="rounded border"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=80.191%2C13.038%2C80.295%2C13.124&layer=mapnik&marker=13.0812,80.2750"
          ></iframe>

          {/* Button to View Full Map */}
          <div className="mt-3">
            <a href="https://www.openstreetmap.org/#map=12/13.0812/80.2750" className="btn btn-primary">
              View Full Map
            </a>
          </div>
        </div>
      </div>

      {/* Relief Center Information */}
      <div className="mt-4">
        <h4 className="text-success">📍 Relief Centers Nearby</h4>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Marina Relief Camp <span className="badge bg-success rounded-pill">Open</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Egmore Community Shelter <span className="badge bg-danger rounded-pill">Full</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Anna Nagar Relief Hub <span className="badge bg-warning rounded-pill">Limited</span>
          </li>
        </ul>
      </div>

      {/* Emergency Contact Button */}
      <div className="text-center mt-4">
        <button className="btn btn-danger btn-lg shadow">
          🚨 Emergency Helpline
        </button>
      </div>
    </div>
  );
};

export default LiveMap;
