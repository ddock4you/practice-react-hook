import React, { useRef } from "react";

const useFullScreen = callback => {
    const element = useRef();

    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen();
            callback(true);
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        callback(false);
    };
    return { element, triggerFull, exitFull };
};

const UseFullScreenHook = () => {
    const onFullS = isFull => {
        console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullScreen(onFullS);

    return (
        <div ref={element} style={{ height: "1000vh" }}>
            <img
                src="http://www.newscj.com/news/photo/201402/224964_175994_2514.jpg"
                alt="aaa"
            />
            <button onClick={triggerFull}>Make fullscreen</button>
            <button onClick={exitFull}>Exit fullscreen</button>
        </div>
    );
};

export default UseFullScreenHook;
