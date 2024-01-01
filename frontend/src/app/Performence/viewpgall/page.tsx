'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface PerformanceData {
  id: number;
  title: string;
  due_date: string; 
  description: string;
  
}

const AllDataDisplay = () => {
  const [allData, setAllData] = useState<PerformanceData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PerformanceData[]>('http://localhost:8000/performence/getAll');

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
      <h1 className="text-3xl font-bold mb-4">All PG Profile Display</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border-b">ID</th>
              <th className="p-2 border-b">Title</th>
              <th className="p-2 border-b">Due Date</th>
              <th className="p-2 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data) => (
              <tr key={data.id} className="hover:bg-gray-100">
                <td className="p-2 border-b">{data.id}</td>
                <td className="p-2 border-b">{data.title}</td>
                <td className="p-2 border-b">{data.due_date}</td>
                <td className="p-2 border-b">{data.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDataDisplay;