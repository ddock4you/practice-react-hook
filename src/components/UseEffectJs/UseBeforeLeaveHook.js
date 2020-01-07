import React, { useEffect } from "react";

const useBeforeLeave = onBefore => {
    // if (typeof onBefore !== "function") {
    //     return;
    // }

    const handle = event => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    });
};

const UseBeforeLeaveHook = () => {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);

    return <></>;
};

export default UseBeforeLeaveHook;
