import React, { useState, useEffect } from "react";

const SessionLogout = () => {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    const savedTime = sessionStorage.getItem("time");

    if (savedUser && savedTime) {
      setUser(savedUser);
      setTimeLeft(Number(savedTime));
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;

    if (timeLeft === 0) {
      logout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        sessionStorage.setItem("time", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isLoggedIn, timeLeft]);

  const login = () => {
    if (!user.trim()) {
      alert("Enter User Name");
      return;
    }

    sessionStorage.setItem("user", user);
    sessionStorage.setItem("time", 120);

    setTimeLeft(120);
    setIsLoggedIn(true);

    alert("Login Successful");
  };

  const logout = () => {
    sessionStorage.clear();
    setUser("");
    setTimeLeft(120);
    setIsLoggedIn(false);

    alert("Session Expired! Logged Out");
  };

  return (
    <div className="container col-md-6 mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h4>Auto Logout using Session Storage</h4>
        </div>

        <div className="card-body text-center">
          {!isLoggedIn ? (
            <>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter User Name"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />

              <button
                className="btn btn-success"
                onClick={login}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <h5>Welcome: {user}</h5>

              <h6 className="text-danger mt-3">
                Session expires in: {timeLeft} sec
              </h6>

              <button
                className="btn btn-danger mt-2"
                onClick={logout}
              >
                Logout
              </button>
            </>
          )}

          <hr />

          <p>
            Refresh Page - Data stays
            <br />
            Close Tab - Data Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionLogout;