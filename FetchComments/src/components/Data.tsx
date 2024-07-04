import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userdata from "../lib/userdata";
// import useFetch from '../hooks/useFetch';

function Data() {
    const [commentId, setCommentId] = useState<string | null>(null);
    const location = useLocation();
    // const  data  = useFetch();
    const { data, loading, error } = userdata();


    useEffect(() => {
        const queryParam = new URLSearchParams(location.search).get('user');
        setCommentId(queryParam);
    }, [location.search]);

    // Find the comment in the data array based on commentId
    const filterdata = data.find((val): any =>
        val.id.toString() === commentId
    )

    // if(!filterdata){
    //     return <p>No comment found</p>
    // }

    if (loading) {
        return <p className="text-center text-white">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!data) {
        return <p className="text-center text-white">No comment found</p>;
    }

    return (

        <div className="bg-slate-700 font-serif p-10 flex justify-center">
            <div className="max-w-2xl p-10 text-xl font-bold text-black bg-white border border-gray-200 rounded-lg shadow dark:bg-orange-700 dark:border-gray-700 flex flex-col gap-1 mb-4 ml-12">
                <span>Name : {filterdata.name}</span>
                <span>Username : {filterdata.username}</span>
                <span>Email : {filterdata.email}</span>
                <span>Address : {filterdata.address.city}</span>
                <span>Phone : {filterdata.phone}</span>
                <span>Company Name : {filterdata.company.name}</span>
            </div>
        </div>

    );
}

export default Data;
