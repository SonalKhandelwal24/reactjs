import { useEffect, useState } from "react";

function useFetch() {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/comments`;
        fetch(url)
            .then((response) => response.json())
            .then((value) => setData(value.slice(0, 20)));
        
            console.log(data);
    }, []);
    return data;
}
export default useFetch;
