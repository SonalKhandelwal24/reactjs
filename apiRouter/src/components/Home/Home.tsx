import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const [data, setData] = useState([]);
    const navigate =  useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
            });
    }, [])


    function handleShowMore(id: any): void {
        navigate(`/info?user=${id}`)
    }

    return (
        <div
        className="w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat font-serif"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2522665/pexels-photo-2522665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <h1 className="text-3xl text-center mt-20 font-bold">List of data:</h1>
  
        <div className="w-full">
          <ul className="flex flex-row flex-wrap gap-10">
            {data.map((item:any) => (
              <li
                className="mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 font-serif text-xl"
                key={item.id}
              >
                <span>Name:</span>
                <span className="text-amber-900"> {item.name} </span>
                <br />
                <span>City:</span>
                <span className="text-amber-900"> {item.address.city} </span>
                <br />
                <button
                  className="text-green-800 hover:text-blue-700 active:text-black"
                  onClick={() => handleShowMore(item.id)}
                >
                  Show more...
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}


export default Home