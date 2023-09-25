import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/CustomersSlice';

const AddCustomerPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddCustomer = () => { 
    dispatch(addCustomer({ name, email }));
  
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h1>Add Customer</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAddCustomer}>Add Customer</button>
    </div>
  );
};

export default AddCustomerPage;
