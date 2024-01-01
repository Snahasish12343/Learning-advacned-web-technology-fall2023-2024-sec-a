'use client'
import { useState } from 'react';
import axios from 'axios';

const FetchInfoForm = () => {
  const initialFormData = {
    id: '',
    title: '',
    due_date: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFetchInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/performence/get/${formData.id}`);
      
      
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
      <h1>From Hr Management Goal Database</h1>
      <form>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </div>
        <div>
          <button type="button" onClick={handleFetchInfo}>Search</button>
        </div>
      </form>

      <div>
        <h2>Information:</h2>
        <p>Title: {formData.title}</p>
        <p>Due Date: {formData.due_date}</p>
        <p>Description: {formData.description}</p>
      </div>
    </div>
  );
};

export default FetchInfoForm;