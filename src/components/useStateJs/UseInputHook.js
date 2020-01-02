import React, { useState } from "react";

// useInput1

const useInput1 = initialValue => {
    const [value] = useState(initialValue);
    const onChange = e => {
        console.log(e.target);
    };
    return { value, onChange };
};

export const UseInputHook1 = () => {
    const name = useInput1("Mr.");

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

// useInput2
const useInput2 = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
        const {
            target: { value }
        } = e;
        console.log(value);
        let willUpdate = true;
        // console.log(validator);
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

export const UseInputHook2 = () => {
    // const maxLen = value => value.length <= 10;
    const maxLen = value => !value.includes("@");
    const name = useInput2("Mr.11", maxLen);
    const email = useInput2("@");

    return (
        <div>
            <h1>useInput2 (유효성 검사)</h1>
            <input
                placeholder="Name"
                {...name} /*value={name.value} onChange={name.onChange}*/
            ></input>
            <input placeholder="Name" {...email}></input>
        </div>
    );
};

// export default UseInputHook1;
