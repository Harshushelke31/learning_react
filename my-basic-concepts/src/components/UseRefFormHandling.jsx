import React, { useRef, useState } from 'react';

const UseRefFormHandling = () => {

    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const cityRef = useRef();
    const maleRef = useRef();
    const femaleRef = useRef();

    const [errors, setErrors] = useState({});

    // Validation Function
    const Validate = (formData) => {

        let newErrors = {};

        // Full Name Validation
        if (!formData.fullName) {
            newErrors.fullName = "Full Name is required";
        }
        else if (formData.fullName.length < 3) {
            newErrors.fullName = "Name should be at least 3 characters";
        }

        // Email Validation
        if (!formData.email) {
            newErrors.email = "Email is required";
        }

        // Password Validation
        const passwordRegex =
            /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

        if (!formData.password) {
            newErrors.password = "Password is required";
        }
        else if (!passwordRegex.test(formData.password)) {
            newErrors.password =
                "Password must be 8 characters, include 1 uppercase letter and 1 special symbol";
        }

        // City Validation
        if (!formData.city) {
            newErrors.city = "Please select city";
        }

        // Gender Validation
        if (!formData.gender) {
            newErrors.gender = "Please select gender";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Form Submit
    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = {
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            city: cityRef.current.value,
            gender: maleRef.current.checked
                ? "Male"
                : femaleRef.current.checked
                ? "Female"
                : ""
        };

        if (Validate(formData)) {

            console.log(formData);

            alert("Form Submitted Successfully");

            // Clear Form
            fullNameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
            cityRef.current.value = "";
            maleRef.current.checked = false;
            femaleRef.current.checked = false;

            setErrors({});
        }
    };

    return (
        <div className="container mt-4">

            <h2 className="text-center mb-4">
                Uncontrolled Form Using useRef
            </h2>

            <form onSubmit={handleSubmit}>

                {/* Full Name */}
                <div className="mb-3">

                    <label className="form-label">
                        Full Name
                    </label>

                    <input
                        type="text"
                        ref={fullNameRef}
                        className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                        placeholder="Enter Full Name"
                    />

                    {errors.fullName && (
                        <div className="invalid-feedback">
                            {errors.fullName}
                        </div>
                    )}

                </div>

                {/* Email */}
                <div className="mb-3">

                    <label className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        ref={emailRef}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Enter Email"
                    />

                    {errors.email && (
                        <div className="invalid-feedback">
                            {errors.email}
                        </div>
                    )}

                </div>

                {/* Password */}
                <div className="mb-3">

                    <label className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        ref={passwordRef}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Enter Password"
                    />

                    {errors.password && (
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                    )}

                </div>

                {/* City */}
                <div className="mb-3">

                    <label className="form-label">
                        Select City
                    </label>

                    <select
                        ref={cityRef}
                        className={`form-control ${errors.city ? "is-invalid" : ""}`}
                    >
                        <option value="">
                            Choose City...
                        </option>

                        <option value="Mumbai">
                            Mumbai
                        </option>

                        <option value="Pune">
                            Pune
                        </option>

                        <option value="Nashik">
                            Nashik
                        </option>

                    </select>

                    {errors.city && (
                        <div className="invalid-feedback">
                            {errors.city}
                        </div>
                    )}

                </div>

                {/* Gender */}
                <div className="mb-3">

                    <label className="form-label d-block">
                        Gender
                    </label>

                    <input
                        type="radio"
                        name="gender"
                        ref={maleRef}
                    /> Male

                    <input
                        type="radio"
                        name="gender"
                        ref={femaleRef}
                        className="ms-3"
                    /> Female

                    {errors.gender && (
                        <div className="text-danger mt-1">
                            {errors.gender}
                        </div>
                    )}

                </div>

                {/* Submit Button */}
                <button className="btn btn-primary">
                    Submit
                </button>

            </form>

        </div>
    );
};

export default UseRefFormHandling;