import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { removeCustomer } from '../features/CustomersSlice';
import { DefaultSidebar } from './SideB';
 
const ViewCustomerPage = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);
  
    const handleRemoveCustomer = (customerId) => {
      dispatch(removeCustomer(customerId));
    };
  
    return (
        <div className="flex">
        <DefaultSidebar />
        <div className=" flex-grow pl-[20rem]"> 
      
      <div className="p-8">
        <h1 className="text-2xl mb-4 font-bold">View Customers</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded text-grey">
            <thead>
              <tr className="bg-slate-500">
                <th className="p-4">First Name</th>
                <th className="p-4">Last Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id} className="bg-grey-300">
                  <td className="p-4">{customer.fnmae}</td>
                  <td className="p-4">{customer.lname}</td>
                  <td className="p-4">{customer.email}</td>
                  <td className="p-4">{customer.ph}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemoveCustomer(customer.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
    );
  };
 
  

export default ViewCustomerPage;
