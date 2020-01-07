import React from "react";

const useConfirm = (message = "", callback, rejection) => {
    if (typeof callback !== "function") {
        return;
    }

    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        } else {
            rejection();
        }
    };
    return confirmAction;
};

const UseConfirmHook = () => {
    const deleteWorld = () => console.log("Deleting the world");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

    return (
        <>
            <button onClick={confirmDelete}>Delete the world</button>
        </>
    );
};

export default UseConfirmHook;
