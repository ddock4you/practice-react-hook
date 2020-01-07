import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 1) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    });
    return { ref: element, style: { opacity: 0 } };
};

const UseFadeInHook = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);

    return (
        <>
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>Lerem Lerem Lerem</p>
        </>
    );
};

export default UseFadeInHook;
