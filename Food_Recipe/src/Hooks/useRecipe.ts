import { useEffect, useState } from "react";

function useRecipe() {

    const [data, setData] = useState([]);
    const apiKey = "OH+BwLpgxFgsKC5TqFfmGA==2TJYgDllc7EOw01s";
    const query = "italian wedding soup";

    useEffect(() => {
        const fetchData = async () => {

             await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
                headers: {
                    "X-Api-Key": apiKey,
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Request failed with status ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    console.error("Request failed:", error);
                });
        };

        fetchData();
    }, [query]);

    return { data }
}

export default useRecipe;
