'use client'
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface AddsalarybymanagerProps {}

const Addsalarybymanager: React.FC<AddsalarybymanagerProps> = () => {
  const router = useRouter();
  const [id, setid] = useState('');
  const [ename, setename] = useState('');
  const [amount, setamount] = useState('');
  const [bonus, setbonus] = useState('');
  const [totalsalary, settotalsalary] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/salary/create', {id, ename, amount, bonus, totalsalary});
      console.log('Form submitted successfully', response.data);
      router.push('/Salary/salaryforall');
    } catch (error) {
      console.error('Error submitting form', error);
    }

  };

  return (
    
    <div className="min-h-screen from-sky-500 to-indigo-500 bg-gradient-to-r flex flex-col items-center justify-center">
      <Head>
        <title>HR Management System - Credit System</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
       New Credit Profile
      </h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">
            Employee id
          </label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setid(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">
            Employee name
          </label>
          <input
            type="name"
            id="ename"
            value={ename}
            onChange={(e) => setename(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Password" className="block text-gray-700 font-bold mb-2">
            Set Transfer Amount
          </label>
          <input
            type="name"
            id="name"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Password" className="block text-gray-700 font-bold mb-2">
            Bonus Amount
          </label>
          <input
            type="number"
            id="number"
            value={bonus}
            onChange={(e) => setbonus(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Password" className="block text-gray-700 font-bold mb-2">
            Total Salary 
          </label>
          <input
            type="name"
            id="name"
            value={totalsalary}
            onChange={(e) => settotalsalary(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className='flex items-center justify-center'>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>

      <p className="text-center text-black text-xs">
         Go Back to <Link href="/" className=' text-white'>Home</Link>
      </p>
    </div>
  );
};

export default Addsalarybymanager;
