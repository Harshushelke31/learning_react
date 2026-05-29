import React, { useState } from 'react';

const UseStateSimpleFormHandling = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError("Name is Required");
            return;
        }

        if (name.trim().length < 3) {
            setError("Name must be at least 3 characters");
            return;
        }

        setError("");
        alert("Your Name: " + name);
    };

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>

                    <input
                        className='form-control w-50'
                        type='text'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(a) => {
                            setName(a.target.value);
                            setError("");
                        }}

                        style={{
                            border: error
                                ? "1px solid red"
                                : "1px solid grey",
                            padding: "10px"
                        }}
                    />

                    {error && (
                        <p style={{ color: "red", marginTop: "4px" }}>
                            {error}
                        </p>
                    )}

                    <button type='submit' className='m-4'>
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
};

export default UseStateSimpleFormHandling;