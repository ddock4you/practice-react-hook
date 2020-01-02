import React, { useState } from "react";

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
        console.log(e.target);
    };
    return { value, onChange };
};

const UseInputHook = () => {
    const name = useInput("Mr.");

    return (
        <div>
            <h1>useInput</h1>
            <input
                placeholder="Name"
                {...name} /*value={name.value} onChange={name.onChange}*/
            ></input>
        </div>
    );
};

export default UseInputHook;
