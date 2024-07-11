import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './App.css';

interface City {
  city: string;
  country: string;
}

const cities: City[] = [
  { city: 'New Delhi', country: 'India' },
  { city: 'Mumbai', country: 'India' },
  { city: 'Bangalore', country: 'India' },
  { city: 'Chennai', country: 'India' },
  { city: 'Kolkata', country: 'India' },
  { city: 'Hyderabad', country: 'India' },
  { city: 'Pune', country: 'India' },
  { city: 'Ahmedabad', country: 'India' },
  { city: 'Jaipur', country: 'India' },
  { city: 'Surat', country: 'India' },
  { city: 'Lucknow', country: 'India' },
  { city: 'Kanpur', country: 'India' },
  { city: 'Nagpur', country: 'India' },
  { city: 'Indore', country: 'India' },
  { city: 'Thane', country: 'India' },
  { city: 'Bhopal', country: 'India' },
  { city: 'Visakhapatnam', country: 'India' },
  { city: 'Pimpri-Chinchwad', country: 'India' },
  { city: 'Patna', country: 'India' },
  { city: 'Vadodara', country: 'India' },
  { city: 'Ghaziabad', country: 'India' },
  { city: 'Alwar', country: 'India' },
  { city: 'Gurgaon', country: 'India' },
  { city: 'Bharatpur', country: 'India' },
  { city: 'Noida', country: 'India' },
  { city: 'Manali', country: 'India' },
  { city: 'Ladakh', country: 'India' },
  { city: 'Aligarh', country: 'India' },
  { city: 'Masoorie', country: 'India' },
  // Add more cities as needed
];
const App = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null); // State to hold selected city
  const [addedCities, setAddedCities] = useState<City[]>([]); // State to hold cities added by the user
  const [weatherData, setWeatherData] = useState<{ [key: string]: any }>({}); // State to hold weather data for all added cities

  useEffect(() => {
    // Load previously added cities from localStorage on component mount
    const storedCities = JSON.parse(localStorage.getItem('addedCities') || '[]');
    setAddedCities(storedCities);

    if (storedCities && storedCities.length > 0) {
      storedCities.map((citydata: City) => {
        fetchWeatherData(citydata);
        // console.log(citydata);
        console.log(citydata.city);
      });
    }
  }, []);

  const fetchWeatherData = async (citydata: City) => {
    try {
      const URL = `http://api.weatherapi.com/v1/current.json?key=6193e7f62b79458d8d2122348240507&q=${citydata.city}&aqi=no`; // Replace with your WeatherAPI key
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);

     
      //  Update weatherData state with the new weather data for the city
      setWeatherData(prevWeatherData => (
        { ...prevWeatherData, [citydata.city]: { city: citydata, data } }
      ));
      
      // setWeatherData(prevWeatherData => {
      //   // Find the index of the city in the current weatherData array
      //   const index = prevWeatherData.findIndex(weatherdataa => weatherdataa.city.city === citydata.city);
  
      //   // If the city is not found, add new data; otherwise, replace existing data
      //   if (index === -1) {
      //     return [...prevWeatherData, { city: citydata, data }];
      //   } else {
      //     const updatedWeatherData = [...prevWeatherData];
      //     updatedWeatherData[index] = { city: citydata, data };
      //     return updatedWeatherData;
      //   }
      // });
      

  } catch (error) {
    console.error(`Error fetching weather data for ${citydata.city}:`, error);
  }
};

// {  'New Delhi': { citydata: { city: 'New Delhi', country: 'India' }, data: {/* some data */} },
//   'Mumbai': { citydata: { city: 'Mumbai', country: 'India' }, data: {/* some data */} } }
// setWeatherData(prevWeatherData => ({
//   ...prevWeatherData,
//   'Bangalore': { citydata: { city: 'Bangalore', country: 'India' }, data }
// }));

const handleCityChange = (e: any, value: City | null) => {
  setSelectedCity(value);
};

const handleAddCity = () => {
  if (selectedCity && !addedCities.find(citydata => citydata.city === selectedCity.city)) {
    const updatedCities = [...addedCities, selectedCity];
    setAddedCities(updatedCities);
    console.log("updated cities is : ", updatedCities);

    localStorage.setItem('addedCities', JSON.stringify(updatedCities));

    setSelectedCity(null); // Clear selected city after adding
    fetchWeatherData(selectedCity);
  }
};

const handleDeleteCity = (cityToDelete: City) => {
  const updatedCities = addedCities.filter(citydata => citydata.city !== cityToDelete.city);
  setAddedCities(updatedCities);
  localStorage.setItem('addedCities', JSON.stringify(updatedCities));

  // Update weatherData state to remove the deleted city's weather data
  setWeatherData(prevWeatherData => {
    const { [cityToDelete.city]: _, ...rest } = prevWeatherData;
    console.log("Deleted city is " + cityToDelete.city);
    return rest;
  });
};

return (
  <div id='container' className=" mx-auto flex gap-10 bg-stone-300 h-screen">
    <div id='container-box-1' className='flex-1 flex flex-col gap-20 p-10 h-screen'>
      <div className='flex justify-center gap-5'>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={cities}
          getOptionLabel={(option) => option.city} // Display city in dropdown
          sx={{ width: 300 }}
          value={selectedCity}
          onChange={handleCityChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Cities"
              className='rounded-lg bg-slate-400'
              InputProps={{
                ...params.InputProps,
                className: 'bg-gray-200 p-2 rounded shadow-lg text-black border'
              }}
            />
          )}
        />
        <button
          type="button"
          onClick={handleAddCity}
          className='min-w-28 bg-pink-900 hover:bg-rose-950 active:bg-black active:text-white text-lg text-white font-bold
            border border-cyan-950 py-2 px-4 rounded ml-2 shadow-lg font-serif'
        >
          Add
        </button>
      </div>

      <div className='grid grid-cols-3 gap-10'>
        {Object.keys(weatherData).map((key, index) => {
          // key = ['mumbai', 'delhi', 'lucknow', 'manali'], index = 0,1,2,3
          // 'Mumbai': { citydata: { city: 'Mumbai', country: 'India' }, data: {current: { temp_c: 30.3,condition: { text: 'Partly cloudy' }  }} }
          const weatherItem = weatherData[key];
          return (
            <div key={index} className="weather-info max-w-xl space-y-3 h-auto text-lg font-serif text-gray-50  bg-stone-800  border-2 border-gray-400 shadow-lg shadow-slate-600 p-8 rounded-lg">
              <h3>Weather Information for {weatherItem.city.city}</h3>
              <p>Temperature : {weatherItem.data.current.temp_c}°C</p>
              <p>Condition : {weatherItem.data.current.condition.text}</p>
            </div>
          )
        })}
      </div>
    </div>

    <div id='container-box-2' className='flex-shrink-0 max-w-[350px]  min-w-[350px]  shadow-xl p-5 h-full  bg-stone-400' >
      <div className='  text-red-950  rounded-lg'
      >
        <h1 className='text-center pt-4 font-serif text-3xl font-bold text-slate-900'>Added Cities</h1>
        <ul className=' font-serif pt-5 '>
          {addedCities.map((city, index) => (
            <li key={index} className='flex justify-between items-center my-3 px-4 text-lg truncate font-bold'>
              {city.city}
              <button
                className='bg-pink-900 hover:bg-blue-900 active:bg-red-950 text-white  ml-5 py-2 px-3 rounded'
                onClick={() => handleDeleteCity(city)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
};

export default App;
