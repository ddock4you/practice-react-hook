import React, { useState } from "react";

const useStateHook = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div className="App">
            <h1>Hello {item}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={incrementItem}>증가</button>
            <button onClick={decrementItem}>감소</button>
        </div>
    );
};

export default useStateHook;
