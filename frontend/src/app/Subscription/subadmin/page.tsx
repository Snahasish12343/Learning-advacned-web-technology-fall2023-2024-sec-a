'use client'
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface AddsubbymanagerProps {}

const Addsubbymanager: React.FC<AddsubbymanagerProps> = () => {
  const router = useRouter();
  const [id, setid] = useState('');
  const [size, setsize] = useState('');
  const [ers, seters] = useState('');
  const [ere, setere] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/subscription/createbysupadmin/', {id, size, ers, ere});
      console.log('Form submitted successfully', response.data);
      router.push('/Subscription/submanager/');
    } catch (error) {
      console.error('Error submitting form', error);
    }

  };

  return (
    
    <div className="min-h-screen from-sky-500 to-indigo-500 bg-gradient-to-r flex flex-col items-center justify-center">
      <Head>
        <title>HR Management System - Subscription System (SuperAdmin)</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
       New Subscription Profile
      </h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">
            Subscription id
          </label>
          <input
            type="id"
            id="id"
            value={id}
            onChange={(e) => setid(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">
            Subscription Size
          </label>
          <input
            type="name"
            id="name"
            value={size}
            onChange={(e) => setsize(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">
            Employee Range Start
          </label>
          <input
            type="name"
            id="name"
            value={ere}
            onChange={(e) => setere(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">
            Employee Range End 
          </label>
          <input
            type="name"
            id="name"
            value={ers}
            onChange={(e) => seters(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className='flex items-center justify-center'>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Subscription
          </button>
        </div>
      </form>

      <p className="text-center text-black text-xs">
         Go Back to <Link href="/" className=' text-white'>Home</Link>
      </p>
    </div>
  );
};

export default Addsubbymanager;
