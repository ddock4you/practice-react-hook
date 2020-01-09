import React, { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(new Date());
    };
    useEffect(() => {
        axiosInstance(opts)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch(error => {
                setState({
                    ...state,
                    loading: false,
                    error
                });
            });
    }, [trigger]);
    if (!opts.url) {
        return;
    }
    return { ...state, refetch };
};

const UseAxiosHook = () => {
    const { loading, data, error, refetch } = useAxios({
        url: "https://yts.lt/api/v2/list_movies.json"
    });
    console.log(
        `Loading: ${loading}\nData: ${JSON.stringify(data)}\nError: ${error}`
    );
    return (
        <>
            <div>{data && data.status}</div>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </>
    );
};

export default UseAxiosHook;
