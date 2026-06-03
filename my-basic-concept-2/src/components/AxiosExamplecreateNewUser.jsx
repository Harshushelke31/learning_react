import React, { useState } from "react";
import axios from "axios";

const AxiosExamplecreateNewUser = () => {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: name,
        }
      );

      console.log("Created User Data:", res.data);

      setName("");
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Create New User</h3>

      <input
        className="form-control w-50 mb-3"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Create User
      </button>
    </div>
  );
};

export default AxiosExamplecreateNewUser;