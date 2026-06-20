import React, { useState } from 'react';

const WithoutUseMemo = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    const doubleNumber = slowDouble(number);

    return (
        <div>
            <h1>Without useMemo</h1>

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />

            <br /><br />

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />

            <h3>Double: {doubleNumber}</h3>
        </div>
    );
};

function slowDouble(num) {
    console.log("Slow function running...");

    for (let i = 0; i < 100000000; i++) {}

    return num * 2;
}

export default WithoutUseMemo;