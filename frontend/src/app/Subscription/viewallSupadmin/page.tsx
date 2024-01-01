'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface SubscriptionData {
  id: number;
  totalemplsizeoyeeneed: string;
  ers: string;
  ere: string;
  
}

const AllDataDisplay: React.FC = () => {
  const [allData, setAllData] = useState<SubscriptionData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<SubscriptionData[]>('http://localhost:8000/subscription/getAlladmin');

        if (response.data) {
          setAllData(response.data);
        } else {
          console.error('No data found in the response.');
        }
      } catch (error) {
        console.error('Error fetching all data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4"> All SuperAdmin Subscriptions! </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border-b">ID</th>
              <th className="p-2 border-b">Offering Size</th>
              <th className="p-2 border-b">Employee Range Start</th>
              <th className="p-2 border-b">Employee Range End</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data) => (
              <tr key={data.id} className="hover:bg-gray-100">
                <td className="p-2 border-b">{data.id}</td>
                <td className="p-2 border-b">{data.totalemplsizeoyeeneed}</td>
                <td className="p-2 border-b">{data.ers}</td>
                <td className="p-2 border-b">{data.ere}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDataDisplay;