'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface SalaryData {
  id: number;
  ename: string;
  bonus: number;
  amount: number;
  totalsalary: number;
  // Add other properties as needed
}

const AllDataDisplay = () => {
  const [allData, setAllData] = useState<SalaryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<SalaryData[]>('http://localhost:8000/salary/getAll');

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
      <h1 className="text-3xl font-bold mb-4">All Data Display</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border-b">ID</th>
              <th className="p-2 border-b">Employee Name</th>
              <th className="p-2 border-b">Bonus</th>
              <th className="p-2 border-b">Amount</th>
              <th className="p-2 border-b">Total Salary</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data) => (
              <tr key={data.id} className="hover:bg-gray-100">
                <td className="p-2 border-b">{data.id}</td>
                <td className="p-2 border-b">{data.ename}</td>
                <td className="p-2 border-b">{data.bonus}</td>
                <td className="p-2 border-b">{data.amount}</td>
                <td className="p-2 border-b">{data.totalsalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDataDisplay;