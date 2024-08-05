import React, { useEffect, useState } from 'react';
import '../App.css';
import { ApiResponse } from '../types';
import Card from '../components/Card';
import { fetchApiResponse } from '../services';

const Home = () => {
  //States to store API results, loading state and possible errors
  const [result, setResult] = useState<ApiResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Call the fetchData function when assembling the component
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Try to fetch data from the API
      const data = await fetchApiResponse();
      setResult(data);
    } catch (error: any) {
      // Defines the error state if a problem occurs in the request
      setError(error.message);
    } finally {
      // Sets the loading state to false, regardless of success or error in the request
      setLoading(false);
    }
  };

  console.log('result =>>', result);

  return (
    <div className='container page-content'>
      <div className='row'>
        {/* Loading message */}
        {loading &&
          <div style={{ textAlign: 'center', margin: '30px ' }}>
            <div className='loader bigger border-lilac' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        }
        {/* Error message */}
        {error && <p>Error: {error}</p>}
        {!loading && !error && result && result.length > 0 && result.map((item: ApiResponse) => (
          <div key={item._id} className='col-24 col-md-8 col-lg-6' style={{ padding: '10px 5px' }}>
            <Card item={item} />
          </div>
        ))}
        {/* Message if there are no results */}
        {!loading && !error && result && result.length === 0 && <p>No results found.</p>}
      </div>
    </div>
  );
};

export default Home;
