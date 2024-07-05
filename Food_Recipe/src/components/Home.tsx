import { useEffect, useState, ChangeEvent } from 'react';

interface Recipe {
    title: string;
    ingredients: string;
    servings: string;
    instructions: string;
}

function Home() {
    const [searchValue, setSearchValue] = useState<string>('Indian');
    const [tempDataList, setTempDataList] = useState<Recipe[]>([]);
    const [showValue, setShowValue] = useState<Recipe[]>([]);
    const [serveArray, setServeArray] = useState<string[]>([]);

    useEffect(() => {
        const apiKey = 'OH+BwLpgxFgsKC5TqFfmGA==2TJYgDllc7EOw01s';
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${searchValue}`, {
                    headers: {
                        'X-Api-Key': apiKey,
                    },
                });
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                const data: Recipe[] = await response.json();
                setShowValue(data);
                setTempDataList(data);

                // Extract unique servings values
                const uniqueServings = [...new Set(data.map((recipe) => recipe.servings))];
                setServeArray(uniqueServings);
            } catch (error) {
                console.error('Request failed:', error);
            }
        };
        fetchData();
    }, [searchValue]);

    const handleServingChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const serve = e.target.value;
        if (!serve) {
            setTempDataList(showValue);
        } else {
            const filteredData = showValue.filter((data) => data.servings === serve);
            setTempDataList(filteredData);
        }
    };

    return (
        <>
        <h1 className='text-center  font-serif  text-white font-bold'>Food Dishes</h1>

            <form className="max-w-md mx-auto my-8">
                <div className="relative">
                    <input
                        type="search"
                        id="default-search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search for a recipe..."
                        className="block w-full p-3 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-cyan-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="flex justify-center my-4">
                <select
                    name="servings"
                    id="servings"
                    onChange={handleServingChange}
                    className="border px-5 py-3 mb-5 rounded-lg font-medium bg-gray-700 text-white outline-none"
                >
                    <option value="">All Servings</option>
                    {serveArray.map((serving, index) => (
                        <option key={index} value={serving}>{serving}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-10 rounded-xl bg-white dark:bg-gray-800">
                {tempDataList.map((recipe, index) => (
                    <div
                        key={index}
                        className="max-w-full my-5 py-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600"
                    >
                        <ul className="px-8">
                            <li>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                                    Title: {recipe.title}
                                </h5>
                                <p className="mb-3 text-lg font-medium text-gray-700 dark:text-white">
                                    Servings: {recipe.servings}
                                </p>
                                <p className="mb-3 font-medium text-gray-700 dark:text-white">
                                    Ingredients: {recipe.ingredients}
                                </p>
                                {/* <p className="mb-3 font-normal text-gray-700 dark:text-white">
                                    Instructions: {recipe.instructions}
                                </p> */}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
