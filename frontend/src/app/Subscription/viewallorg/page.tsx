'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface OrganizationSubscription {
  id: number;
  totalemployeeneed: number;
  role: string;
  
}

const AllDataDisplay = () => {
  const [allData, setAllData] = useState<OrganizationSubscription[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<OrganizationSubscription[]>('http://localhost:8000/subscription/getAllorg');

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
      <h1 className="text-3xl font-bold mb-4"> All Organization Subscriptions! </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border-b">ID</th>
              <th className="p-2 border-b">Total Employee Need</th>
              <th className="p-2 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data) => (
              <tr key={data.id} className="hover:bg-gray-100">
                <td className="p-2 border-b">{data.id}</td>
                <td className="p-2 border-b">{data.totalemployeeneed}</td>
                <td className="p-2 border-b">{data.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDataDisplay;