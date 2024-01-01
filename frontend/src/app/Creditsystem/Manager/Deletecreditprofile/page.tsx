'use client'
import { useState } from 'react';
import axios from 'axios';
import router from 'next/router';
import { useRouter } from 'next/navigation';

const SubmitForm = () => {
  const initialFormData = {
    id: '',
    
  };

  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await axios.delete(`http://localhost:8000/ecredit/delete/${formData.id}`);
      console.log('Entry deleted successfully!');
      router.push('/Creditsystem/Manager/viewall');
      setFormData(initialFormData); 
    } catch (error) {
      console.error('Error deleting entry', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Enter the Credit profile id that you wish to Delete</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div>
          <label>Credit ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </div>
        
        <div>
          <button type="submit">Delete Entry</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;