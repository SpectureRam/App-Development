import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignUpPage';
import Home from './Pages/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import CartPage from './Pages/CartPage';
import TandCpage from './Pages/T&Cpage';
import ContactForm from './Pages/ContactUs';
import ScrollToTop from './ScrollToTop';
import Shop from './Pages/Shop';
import AddProductPage from './Demo/ProductAddPage';
import ProductListPage from './Demo/ProductListPage'; 
import ViewCustomerPage from './Demo/ViewCustomerPage';
import AddCustomerPage from './Demo/AddCustomerPage';
import AdminLogin from './Admin/ALogin';
import Dashboard from './Demo/Dashboard';
import CategoryTypes from './Components/CategoryTypes'
import ProductListingHome from './Components/ProductsListingHome'
import ProductDetailsList from './Components/ProductDetailsList';
import AllProducts from './Components/Category/AllProducts'
import AboutUs from './Pages/AboutUs'
import FAQ from './Pages/FAQPage'
import Navbar2 from './Pages/Navbar'
import Razorpay from './Pages/RazorPayComponent'
import Checkout from './Pages/Checkout'
import Demod from './Pages/DemoC'
import Success from './Pages/Success'
import Fail from './Pages/Fail'
function App() {
  const role = localStorage.getItem('role');
  return (
    <BrowserRouter>
          <ScrollToTop />
          <Routes>
          {/*Login*/}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          {/*Home */}
          <Route path="/demo" element={<Navbar2/>}/> 
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/category" element={<CategoryTypes />} /> 
            <Route path="/api/products/byCategory/:categoryId" element={<ProductListingHome />} />
            <Route path="/api/products/details/:productId" element={<ProductDetailsList />} />
            { role=== 'ADMIN' || role==='CUSTOMER' && (
              <>
              </>
            )
  }
            <Route path="/contactus" element={<ContactForm />} /> 
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TandCpage />} /> 
            <Route path="/faq" element={<FAQ />} /> 
            <Route path="/admin" element={<AdminLogin />} />  
            <Route path="/pay" element={<Razorpay/>} />
            <Route path="/checkout" element={<Checkout/>} /> 
            <Route path="/democ" element={<Demod/>} /> 
            <Route path="/success" element={<Success/>} /> 
            <Route path="/fail" element={<Fail/>} /> 


            {/* Admin */}
            {role === 'ADMIN' && (
              <>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/addProducts" element={<AddProductPage />} />  
              <Route path="/ViewProducts" element={<ProductListPage />} />
              <Route path="/Users" element={<ViewCustomerPage />} />
              <Route path="/AUsers" element={<AddCustomerPage />} />
              </>
              )}
              {/*Extra*/}
              <Route path="/shop" element={<Shop />} />
              <Route path="/pd" element={<ProductListPage />} />
          </Routes>
    </BrowserRouter>
  );
}
export default App;