import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  address: {
    city: string;
  };
  email: string;
}

function Info() {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  const getQueryParam = (param: string) => {
    return new URLSearchParams(location.search).get(param);
  };

  // Get user ID from the URL
  const userId = getQueryParam('user');

  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data: User) => setUser(data));
    }
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (

    <div className=" font-serif p-10 flex justify-center">
      <div className="max-w-2xl p-10 text-xl font-bold text-black bg-white border border-gray-200 rounded-lg shadow dark:bg-cyan-600 dark:border-gray-700 flex flex-col gap-1 mb-4 ml-12">

        <h1>Id : {user.id}</h1>
        <h1>Name : {user.name}</h1>
        <h1>Username : {user.username}</h1>
        <p>Email : {user.email}</p>
        <p>City : {user.address.city}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default Info;
