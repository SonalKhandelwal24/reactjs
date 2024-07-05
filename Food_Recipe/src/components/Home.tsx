import { useEffect, useState, ChangeEvent } from 'react';

interface Recipe {
    title: string;
    ingredients: string;
    servings: string;
    instructions: string;
}

function Home() {
    const [searchValue, setSearchValue] = useState<string>('indian');
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

    const handleServingChange = (serve:any) => {
        // const serve = e.target.value;
        if (!serve) {
            setTempDataList(showValue);
        } else {
            const filteredData = showValue.filter((data) => data.servings === serve);
            setTempDataList(filteredData);
        }
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Optionally, trigger a new search or other actions on form submit
    };

    return (
        <>
            <form className="max-w-md mx-auto" onSubmit={handleSearchSubmit}>
                <div className="relative">
                    <input
                        type="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="search for a recipe..."
                        className="block w-full px-2 py-3 ps-10 text-lg shadow-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="relative mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <select
                    name="servings"
                    id="servings"
                    onChange={(e) => handleServingChange(e.target.value)}
                    className="block w-full border px-3 py-3 text-sm text-gray-700 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:text-gray-200 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                >
                    <option value="">All Servings</option>
                    {serveArray.map((serving, index) => (
                        <option key={index} value={serving}>
                            {serving}
                        </option>
                    ))}
                </select>

                <div className="grid grid-cols-1 gap-4">
                    {tempDataList.map((recipe, index) => (
                        <div
                            key={index}
                            className="overflow-hidden bg-white shadow-sm rounded-lg border border-gray-200 dark:bg-orange-700 dark:border-gray-700"
                        >
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Title : {recipe.title}</h3>
                                <p className="mt-2 text-lg text-white dark:text-white"><span className='text-lg font-medium'>Servings : </span> {recipe.servings}</p>
                                <p className="mt-2 text-lg text-white dark:text-white"><span className='text-lg font-medium'>Ingredients : </span> {recipe.ingredients}</p>
                                {/* <p className="mt-2 text-sm text-white dark:text-white">Instructions : {recipe.instructions}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
