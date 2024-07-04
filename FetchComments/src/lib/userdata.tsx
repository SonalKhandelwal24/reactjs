// import { useState } from "react";

// const [data, setData]  = useState([])

// let url = `https://jsonplaceholder.typicode.com/comments`;
// const apidata = fetch(url)
//     .then((response) => response.json())
//     .then((value) => setData(value.slice(0, 20)));

//     console.log(data);
//     console.log(apidata);

//     export default apidata ;

import { useEffect, useState } from "react";

function userdata() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                // const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
}

export default userdata;
