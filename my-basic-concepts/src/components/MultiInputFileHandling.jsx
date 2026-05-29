import React, { useState } from "react";

const MultiInputFileHandling = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    city: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Form Validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Name Validation
    if (form.fullName.length < 3) {
      newErrors.fullName =
        "Name should be more than 3 characters";
    }

    // Email Validation
    if (!form.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    // Password Validation
    if (form.password.length < 8) {
      newErrors.password =
        "Password should be minimum 8 characters";
    }

    // City Validation
    if (form.city === "") {
      newErrors.city = "Please select city";
    }

    // Gender Validation
    if (form.gender === "") {
      newErrors.gender = "Please select gender";
    }

    setErrors(newErrors);

    // Success
    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  // Inline CSS Styles
  const styles = {
    container: {
      width: "420px",
      margin: "40px auto",
      padding: "30px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
      fontFamily: "Arial",
    },

    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },

    label: {
      fontWeight: "bold",
      marginTop: "12px",
      display: "block",
      color: "#444",
    },

    input: {
      width: "100%",
      padding: "10px",
      marginTop: "6px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "15px",
    },

    error: {
      color: "red",
      fontSize: "14px",
      marginTop: "4px",
    },

    genderBox: {
      marginTop: "10px",
    },

    button: {
      width: "100%",
      padding: "12px",
      marginTop: "25px",
      backgroundColor: "#4a90e2",
      border: "none",
      color: "white",
      fontSize: "16px",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Controlled Form Validation
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label style={styles.label}>
          Full Name
        </label>

        <input
          type="text"
          style={styles.input}
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {errors.fullName && (
          <div style={styles.error}>
            {errors.fullName}
          </div>
        )}

        {/* Email */}
        <label style={styles.label}>
          Email
        </label>

        <input
          type="text"
          style={styles.input}
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors.email && (
          <div style={styles.error}>
            {errors.email}
          </div>
        )}

        {/* Password */}
        <label style={styles.label}>
          Password
        </label>

        <input
          type="password"
          style={styles.input}
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        {errors.password && (
          <div style={styles.error}>
            {errors.password}
          </div>
        )}

        {/* City */}
        <label style={styles.label}>
          Select City
        </label>

        <select
          style={styles.input}
          name="city"
          value={form.city}
          onChange={handleChange}
        >
          <option value="">
            Choose City
          </option>

          <option value="Pune">
            Pune
          </option>

          <option value="Mumbai">
            Mumbai
          </option>

          <option value="Nashik">
            Nashik
          </option>
        </select>

        {errors.city && (
          <div style={styles.error}>
            {errors.city}
          </div>
        )}

        {/* Gender */}
        <label style={styles.label}>
          Select Gender
        </label>

        <div style={styles.genderBox}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>

          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>

        {errors.gender && (
          <div style={styles.error}>
            {errors.gender}
          </div>
        )}

        <button
          type="submit"
          style={styles.button}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiInputFileHandling;