import { useEffect, useState } from "react";

function useCurrencyInfo(currency:any) {
    const [data, setData] = useState({});
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(url)
            .then((response) => response.json())
            .then((response) => setData(response[currency]));
        console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}
 export default useCurrencyInfo;