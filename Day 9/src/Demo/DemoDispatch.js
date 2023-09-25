import { useDispatch } from 'react-redux';
import { addCustomerLogin, clearCustomerLogin } from '../features/customerLoginSlice';

const SampleComponent = () => {
  const dispatch = useDispatch();

  const handleLogin = () => { 
    const loginData = {
      username: 'john_doe',
      password: 'password123',
    };

 
    dispatch(addCustomerLogin(loginData));
  };

  const handleLogout = () => { 
    dispatch(clearCustomerLogin());
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SampleComponent;
