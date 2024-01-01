'use client'
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface AddcreditbymanagerProps {}

const Addcreditbymanager: React.FC<AddcreditbymanagerProps> = () => {
  const router = useRouter();
  const [id, setid] = useState('');
  const [emname, setemname] = useState('');
  const [currentcredit, setcurrentcredit] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/ecredit/create', {id, emname, currentcredit});
      console.log('Form submitted successfully', response.data);
      router.push('/Creditsystem/Manager/viewcreditbymanager');
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
            id="emname"
            value={emname}
            onChange={(e) => setemname(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Password" className="block text-gray-700 font-bold mb-2">
            Current Credit
          </label>
          <input
            type="number"
            id="currentcredit"
            value={currentcredit}
            onChange={(e) => setcurrentcredit(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className='flex items-center justify-center'>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Credit
          </button>
        </div>
      </form>

      <p className="text-center text-black text-xs">
         Go Back to <Link href="/" className=' text-white'>Home</Link>
      </p>
    </div>
  );
};

export default Addcreditbymanager;
