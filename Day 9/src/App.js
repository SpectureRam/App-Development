import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignUpPage';
// import PhoneLogin from './components/PhoneLogin'; 
// import Navbar from './components/Navbar';
// import Product from './Pages/Products';  
// import Sidebar from './components/Sidebar'; 
// import ProfileContainer from './components/ProfileContainer'
import Home from './Pages/Home';
// import Homefeature from './components/home/homefeature';
// import HomeSaleInfo from './components/home/HomeSaleInfo';
// import Footer from './components/Footer';
// import NewsLetter from './components/home/NewsLetter'; 
import PrivacyPolicy from './Pages/PrivacyPolicy';
import CartPage from './Pages/CartPage'; 
import FAQ from './Pages/FAQ';
import TandCpage from './Pages/T&Cpage';
import ContactForm from './Pages/ContactUs';
import ScrollToTop from './ScrollToTop';
import Shop from './Pages/Shop';
import { DefaultSidebar } from './Demo/SideB';
import AddProductPage from './Demo/ProductAddPage';
import ProductListPage from './Demo/ProductListPage'; 
import ViewCustomerPage from './Demo/ViewCustomerPage';
import AddCustomerPage from './Demo/AddCustomerPage';
import AdminLogin from './Admin/pages/ALogin';
function App() {
  return (
    <BrowserRouter>
      {/* <div className="flex">
        <DefaultSidebar />
        <div className=" flex-grow pl-[20rem]"> */}
          <ScrollToTop />
          {/* <Navbar /> */}
          <Routes>
            {/* <Route path="/" element={<AddProductPage />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/pd" element={<ProductListPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/faq" element={<FAQ />} /> 
            <Route path="/ContactUs" element={<ContactForm />} /> 
            <Route path="/Terms_And_Conditions" element={<TandCpage />} /> 

          {/* Admin */}

         <Route path="/admin" element={<AdminLogin />} />  
         <Route path="/addProducts" element={<AddProductPage />} />  
        <Route path="/ViewProducts" element={<ProductListPage />} />
        <Route path="/Users" element={<ViewCustomerPage />} />
        <Route path="/AUsers" element={<AddCustomerPage />} />
          </Routes>
          {/* <Footer /> */}
        {/* </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
