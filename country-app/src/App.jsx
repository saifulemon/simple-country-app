import { useEffect, useState } from "react";
import Countries from "./components/Countries";

const urlapi = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
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

  return (
    <>
      <h1>Country App</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error: {error.message}</h3>}
      {
        countries && <Countries countries={countries} />
      }
    </>
  );
}

export default App;
