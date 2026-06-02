import React, { useState, useEffect } from "react";

const CookiesExample = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedName = getCookie("student");

    if (savedName) {
      setName(savedName);
    }
  }, []);

  const setCookie = () => {
    if (!input) {
      alert("Enter Name");
      return;
    }

    document.cookie = `student=${input}; expires=Tue, 02 Jun 2026 13:38:00 UTC; path=/`;

    setName(input);
    setInput("");

    alert("Cookie Saved");
  };

  const getCookie = (key) => {
    const cookies = document.cookie.split("; ");

    for (let c of cookies) {
      const [k, v] = c.split("=");

      if (k === key) {
        return v;
      }
    }

    return "";
  };

  const deleteCookie = () => {
    document.cookie =
      "student=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    setName("");

    alert("Cookie Deleted");
  };

  return (
    <div className="container mt-5 col-md-6">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h3>Cookies Example</h3>
        </div>

        <div className="card-body">
          <input
            type="text"
            className="form-control mb-3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Student Name"
          />

          <button
            className="btn btn-success me-2"
            onClick={setCookie}
          >
            Set Cookie
          </button>

          <button
            className="btn btn-danger"
            onClick={deleteCookie}
          >
            Delete Cookie
          </button>

          <hr />

          <h4>Stored Cookie Value</h4>

          <p className="fw-bold">
            {name ? name : "No Cookie Found"}
          </p>

          <hr />

          <p>Refresh Page - Cookie Stays</p>
          <p>Close Browser - Cookie Stays</p>
          <p>Delete / Expired Cookie - Removed</p>
        </div>
      </div>
    </div>
  );
};

export default CookiesExample;