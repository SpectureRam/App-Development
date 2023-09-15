import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Login/LoginPage';
import SignupPage from './Signup/SignUpPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />}>
       
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
