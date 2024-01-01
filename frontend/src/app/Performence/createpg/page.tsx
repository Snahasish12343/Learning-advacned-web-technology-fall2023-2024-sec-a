'use client'
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface AddpgbymanagerProps {}

const Addpgbymanager: React.FC<AddpgbymanagerProps> = () => {
  const router = useRouter();
  const [id, setid] = useState('');
  const [title, settitle] = useState('');
  const [due_date, setdue_date] = useState('');
  const [description, setdescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/performence/create/', {
        id,
        title,
        due_date,
        description,
      });
      console.log('Form submitted successfully', response.data);
      router.push('/Performence/Manager/viewperformencebymanager');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="min-h-screen from-sky-500 to-indigo-500 bg-gradient-to-r flex flex-col items-center justify-center">
      <Head>
        <title>HR Management System - PG System</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">New PG Profile</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
            Employee ID
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
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="due_date" className="block text-gray-700 font-bold mb-2">
            Due Date
          </label>
          <input
            type="text"
            id="due_date"
            value={due_date}
            onChange={(e) => setdue_date(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Goal
          </button>
        </div>
      </form>

      <p className="text-center text-black text-xs">
        Go Back to <Link href="/" className="text-white">Home</Link>
      </p>
    </div>
  );
};

export default Addpgbymanager;