import React, { useState, useEffect } from 'react';

const SessionDemo = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = sessionStorage.getItem("student");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const saveName = () => {
    if (!name) return alert("Enter Name");

    sessionStorage.setItem("student", name);
    alert("Saved in Session Storage");
  };

  const clearName = () => {
    sessionStorage.removeItem("student");
    setName("");
    alert("Removed from Session Storage");
  };

  return (
    <div>
      <div className="container col-md-6 mt-5">
        <div className="card shadow">
          <div className="card-header bg-success text-white text-center">
            <h4>Session Storage Demo</h4>
          </div>

          <div className="card-body">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button
              onClick={saveName}
              className="btn btn-primary m-2"
            >
              Save
            </button>

            <button
              onClick={clearName}
              className="btn btn-danger m-2"
            >
              Remove
            </button>

            <h5 className="mt-3">
              Storage Name : {name || "No Data"}
            </h5>

            <hr />

            <p>
              Refresh Page - Data stays <br />
              Close Tab - Data Delete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDemo;