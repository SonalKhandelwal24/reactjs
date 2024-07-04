import { useNavigate } from "react-router-dom";
import './Home.css';
import userdata from "../lib/userdata";
// import useFetch from "../hooks/useFetch";

interface Comment {
    username: any;
    id: number;
    name: string;
    email: string;
}

function Home() {


    // const data = useFetch();
    const { data, loading, error } = userdata();
    const navigate = useNavigate();

    function handleShowMore(id: number): void {
        navigate(`/data?user=${id}`);
    }
    
    return (
        <div className="bg-slate-700 font-serif">
            <h1 className="text-5xl text-center font-bold py-5 mb-2 text-orange-500">User's data</h1>
            {loading && <p className="text-center text-white">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            <ul className="grid grid-cols-4 gap-4">
                {data.map((item: Comment) => (
                    <li key={item.id} className="max-w-sm p-6 bg-white border h-60 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-1 mb-4 ml-12">
                        <h4 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                            <span className="text-white">Name :</span> {item.name}
                        </h4>
                        <span className="mb-3  text-gray-700 dark:text-gray-400">
                            <span className="text-white">Email :</span> {item.email}
                        </span>
                        <span className="mb-3  text-gray-700 dark:text-gray-400">
                            <span className="text-white">Username :</span> {item.username}
                        </span>
                        <button onClick={() => handleShowMore(item.id)} className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-blue-800 shadow active:bg-yellow-600 active:text-black outline-none">
                            Show more info...
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;




// useEffect(() => {
//     const list = fetch('https://jsonplaceholder.typicode.com/comments')
//         .then((response) => response.json())
//         .then((data) => {
//             setData(data.slice(0, 15));
//             console.log("data :", data);
//             // return data;
//         });
//     console.log(list);

// }, []);




// useEffect(() => {
//     const list = fetch('https://jsonplaceholder.typicode.com/comments')
//         .then((response) => response.json())
//         .then((data) => {
//             setData(data.slice(0, 15));
//             console.log("data :", data);
//             // return data;
//         });
//     console.log(list);

// }, []);
