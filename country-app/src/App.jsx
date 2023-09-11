import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const urlapi = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
      // console.log(countries.data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(urlapi);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country) => country.name.common !== name);
    setFilteredCountries(filter);
  }

  return (
    <>
      <h1>Country App</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error: {error.message}</h3>}
      {
        countries && <Countries countries={filteredCountries} onremoveCountry={handleRemoveCountry} />
      }
    </>
  );
}

export default App;
