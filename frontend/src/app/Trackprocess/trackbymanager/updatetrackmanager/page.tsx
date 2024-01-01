'use client'
import React, { useState } from 'react';
import axios from 'axios';

const SubmitForm = () => {
  const initialFormData = {
    mid: '',
    title: '',
    id: '',
    due_date: '',
    status: '',
    dos: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleEditData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/track/getbymanager/${formData.mid}`);

      
      if (response.data) {
        await axios.put(`http://localhost:8000/track/updatebymanager/${formData.mid}`, {
          ...formData,
        });

        console.log('Data updated successfully!');
      } else {
        console.error('Invalid ID. Entry does not exist in the database.');
      }
    } catch (error) {
      console.error('Error updating data', error);
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
      <h1>Submit Form</h1>
      <form>
        <div>
          <label>MiD:</label>
          <input type="text" name="mid" value={formData.mid} onChange={handleInputChange} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="text" name="due_date" value={formData.due_date} onChange={handleInputChange} />
        </div>
        <div>
          <label>Employee ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="status" value={formData.status} onChange={handleInputChange} />
        </div>
        <div>
          <label>Date of Submission:</label>
          <input type="text" name="dos" value={formData.dos} onChange={handleInputChange} />
        </div>
        <div>
          <button type="button" onClick={handleEditData}>Update Data</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;