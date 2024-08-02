import React, { useEffect, useState } from 'react';
import '../App.css';
import { ApiResponse } from '../types';

const Home = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: ApiResponse = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("coeee", data)


  return (
    <div className="page-content">
      <h2>Home Page</h2>
      <p>{loading}</p>
     
    </div>
  );
};

export default Home;
