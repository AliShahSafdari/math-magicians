import React, { useState, useEffect } from 'react';
import './css/quote.css';

const Quote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchDate = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=leadership', {
          headers: {
            'X-Api-Key': 'n7v9CVhv4b6yTvQajuHO4A==yWA06hqLK6YEYJID',
          },
        });
        const json = await res.json();
        setData(json[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchDate();
  }, [setData, isLoading]);
  return (
    <div className="qoute-contianer">
      {isLoading && <div>Loading...</div>}
      {hasError && <div className="error">Somethig went Wrong</div>}
      {data && (
        <div>
          <h2>{data.author}</h2>
          <h4>{data.category}</h4>
          <p>{data.quote}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
