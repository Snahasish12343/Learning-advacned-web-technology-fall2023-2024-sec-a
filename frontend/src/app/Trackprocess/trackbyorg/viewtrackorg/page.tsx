'use client'
import { useState } from 'react';
import axios from 'axios';

const FetchInfoForm = () => {
  const initialFormData = {
    id: '',
    title: '',
    due_date: '',
    mid: '',
    status: '',
    dos: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFetchInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/track/getbyorg/${formData.mid}`);
      
     
      if (response.data) {
        setFormData(response.data);
      } else {
        
        console.log('Invalid ID. Entry does not exist in the database.');
      }
    } catch (error) {
      
      console.error('Error fetching information', error);
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
      <h1>From Hr Management Database</h1>
      <form>
        <div>
          <label>ID:</label>
          <input type="text" name="mid" value={formData.mid} onChange={handleInputChange} />
        </div>
        <div>
          <button type="button" onClick={handleFetchInfo}>Search</button>
        </div>
      </form>

      <div>
        <h2>Information:</h2>
        <p>Title: {formData.title}</p>
        <p>Due Date: {formData.due_date}</p>
        <p>Manager ID: {formData.id}</p>
        <p>Status: {formData.status}</p>
        <p>Date of Submission: {formData.dos}</p>
        
      </div>
    </div>
  );
};

export default FetchInfoForm;