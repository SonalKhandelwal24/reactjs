import { useLoaderData } from "react-router-dom"

// Define the type for the data
interface GithubData {
    followers: number;
    avatar_url: string;
}

function Github() {

    const data = useLoaderData() as GithubData;
    //    const[data, setData] = useState([]);
    //  useEffect(() => {
    //     fetch('https://api.github.com/users/JavaCodeWithSonal')
    //     .then((res) => res.json())
    //     .then((data) => { console.log(data);
    //         setData(data) })
    //  }, [])

    return (
        <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/JavaCodeWithSonal')
    // const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}



