'use client'
import React, { useState } from 'react';
import axios from 'axios';

const SubmitForm = () => {
  const initialFormData = {
    id: '',
    emname: '',
    currentcredit: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleCreditUpdate = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/ecredit/get/${formData.id}`);

      
      if (response.data) {
        const currentCredit = parseInt(response.data.currentcredit, 10) || 0;

        const updatedCredit = currentCredit - 10;

        await axios.put(`http://localhost:8000/ecredit/update/${formData.id}`, {
          ...formData,
          currentcredit: updatedCredit.toString(),
        });

        console.log('Credit updated successfully!');
      } else {
        console.error('Invalid ID. Entry does not exist in the database.');
      }
    } catch (error) {
      console.error('Error updating credit', error);
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
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </div>
        <div>
          <label>emname:</label>
          <input type="text" name="emname" value={formData.emname} onChange={handleInputChange} />
        </div>
        <div>
          <label>currentcredit:</label>
          <input type="text" name="currentcredit" value={formData.currentcredit} onChange={handleInputChange} />
        </div>
        <div>
          <button type="button" onClick={handleCreditUpdate}>Apply for Leave</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;