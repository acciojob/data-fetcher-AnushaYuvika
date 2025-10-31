import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); 
      })
      .then((result) => {
        setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 2000); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false);
      });
  }, []);

  return (
    <div id="main">
      {loading && <p>Loading...</p>}

      {!loading && error && <p>An error occurred: {error}</p>}

      {!loading && !error && (
        <div>
          <h1>Data Fetched from API</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
