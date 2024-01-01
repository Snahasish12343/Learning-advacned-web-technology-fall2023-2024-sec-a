'use client'
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function HomeofPerformencemanager() {
  const [active, setActive] = useState(false);

  const handleMenuToggle = () => setActive(!active);

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center items-center">
      <Head>
        <title>Welcome to HR Management Performence goal System</title>
        <meta name="description" content="Your one-stop solution for managing all your HR needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {}

      <h1 className="text-5xl font-bold text-white text-center mb-8">HR Management System</h1>

      <p className="text-xl text-gray-200 text-center mb-8">
        This is Performence Goal Programme to efficiently use manpower.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link href="/Performence/createpg">
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 font-bold rounded-lg px-4 py-2 shadow-md">
           Create Performence Goal
          </button>
        </Link>
        <br></br>
        <br></br>
        <Link href="/Performence/viewpg">
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 font-bold rounded-lg px-4 py-2 shadow-md">
          View Individual Performence Goals
          </button>
        </Link>
        <br></br>
        <br></br>
        <Link href="/Performence/viewpgall">
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 font-bold rounded-lg px-4 py-2 shadow-md">
          View all Performence Goals
          </button>
        </Link>
        <br></br>
        <br></br>
        <Link href="/Performence/deletepg">
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 font-bold rounded-lg px-4 py-2 shadow-md">
          Delete a PG Profile
          </button>
        </Link>
        <br></br>
        
      </div>

      <br></br><br></br>

      <nav className="fixed top-0 right-0 p-4">
        
      </nav>

      <nav className="fixed bottom-0 right-0 p-4">
        <button
          onClick={handleMenuToggle}
          className="text-white hover:text-gray-200 transition-colors duration-200 ease-in-out focus:outline-none"
        >
          {active ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6L18 18"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6H20M4 12H20M4 18H20"
              />
            </svg>
          )}
        </button>
        {active && (
          <ul className="mt-4 text-gray-200 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
