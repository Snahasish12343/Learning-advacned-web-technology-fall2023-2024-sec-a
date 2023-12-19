"use client";
import { useState, useEffect } from 'react';
import CreditDisplay from './components/Creditdisplay';
import CreditControls from './components/CreditControls';
import credit from './_data/credits.json'

const Home = () => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    
    fetch('/credits.json')
      .then((response) => response.json())
      .then((data) => setCredits(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddCredit = () => {
    
    const updatedCredits = credits.map((credit) => ({
      ...credit,
      credit: credit.credit + 5,
    }));
    updateJsonFile(updatedCredits);
    setCredits(updatedCredits);
  };

  const handleSubtractCredit = () => {
    
    const updatedCredits = credits.map((credit) => ({
      ...credit,
      credit: Math.max(0, credit.credit - 5), 
    }));
    updateJsonFile(updatedCredits);
    setCredits(updatedCredits);
  };

  const updateJsonFile = (updatedData: any[]) => {
   
    fetch('/update-credits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credits: updatedData }),
    })
      .then((response) => response.json())
      .then((data) => console.log('JSON file updated:', data))
      .catch((error) => console.error('Error updating JSON file:', error));
  };

  return (
    <div>
      <h1>HR Management Credit System</h1>
      {credits.map((credit) => (
        <div key={credit.id}>
          <CreditDisplay credits={credit.credit} />
          <CreditControls
            onAdd={() => handleAddCredit(credit.id)}
            onSubtract={() => handleSubtractCredit(credit.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;