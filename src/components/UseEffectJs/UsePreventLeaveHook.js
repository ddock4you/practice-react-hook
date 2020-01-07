import React from "react";

const usePreventleave = () => {
    const listener = event => {
        event.preventDefault();
        event.returnValue = "";
    };

    const enablePrevent = () =>
        window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
        window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
};

const UsePreventLeaveHook = () => {
    const { enablePrevent, disablePrevent } = usePreventleave();

    return (
        <>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </>
    );
};

export default UsePreventLeaveHook;
