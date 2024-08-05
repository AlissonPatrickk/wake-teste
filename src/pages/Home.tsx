import React, { useEffect, useState } from 'react';
import '../App.css';
import { ApiResponse } from '../types';
import Card from '../components/Card'
import { fetchApiResponse } from '../services';

const Home = () => {
  const [result, setResult] = useState<ApiResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchApiResponse();
      setResult(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("result =>>", result)

  return (
    <div className="container page-content">
      <div className='row'>
        {result && result.length > 0 && result.map((item: ApiResponse) => (
          <div className='col-24 col-md-8 col-lg-6' style={{ padding: '10px 5px' }}>
            <Card item={item} />
          </div>

        ))}
      </div>

    </div>
  );
};

export default Home;
