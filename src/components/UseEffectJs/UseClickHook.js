import React, { useEffect, useRef } from "react";

const useClick = onClick => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    });
    return element;
};

const useClickHook = () => {
    const sayHello = () => console.log("say Hello");
    const title = useClick(sayHello);
    return (
        <>
            <div ref={title}>Hi1</div>
        </>
    );
};

export default useClickHook;
