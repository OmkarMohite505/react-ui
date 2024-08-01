import React from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const userData = location.state;
  const {
    message,
    jwtToken,
    id,
    email,
    firstName,
    lastName,
    profilePicture,
    userRoles,
  } = userData;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Dashboard</h2>
      <div className="card">
        <div className="card-header">
          <h4>
            Welcome, {firstName} {lastName}
          </h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              {profilePicture && (
                <img
                  src={`data:image/jpeg;base64,${profilePicture}`}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                />
              )}
            </div>
            <div className="col-md-8">
              <p>
                <strong>Message:</strong> {message}
              </p>
              <p>
                <strong>JWT Token:</strong> <code>{jwtToken}</code>
              </p>
              <p>
                <strong>ID:</strong> {id}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Name:</strong> {firstName} {lastName}
              </p>
              <p>
                <strong>Roles:</strong> {Array.from(userRoles).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
