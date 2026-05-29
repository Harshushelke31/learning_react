import React, { useRef, useState } from 'react'

const UseRefWithInput = () =>
{
    const nameRef = useRef();
    const [name,setName] = useState();

    const handleSubmit = () =>
    {
        setName(nameRef.current.value)
    }
    return(
        <div>
            <input
            type='text'
            ref={nameRef}
            placeholder='Enter Name'/>
            <button onClick={handleSubmit}>Submit</button>

            <h2>Name : {name}</h2>
        </div>
    )

}
export default UseRefWithInput;