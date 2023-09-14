//@ts-ignore
import Cover_img from './image.jpg';

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
const colors ={
    primary: "#060606",
    background: "#E0E0E0",
    disabled: "#D9D9D9"
}

const LoginPage = () => {
    return(
        <div className ="w-full h-screen flex items-start">
            <div className="relative w-1/2 h-full flex flex-col">

              <div className="absolute top-[0%] left-[35%] flex flex-col">
                <h1 className="text-4xl text-white font-bold my-4">E-commerce store</h1>
                <p className="text-base text-white font-semibold">Register and get your Desired product</p>
                </div>
                  
              <img src = {Cover_img} className="w-full h-full object-cover"/>
            </div>

            <div className="w-1/2 h-full bg=[#E0E0E0] flex flex-col p-5 justify-between items-center">
                <h1 className="text-xl text-[#0606060] font-bold">House hold E-commerce Store</h1>

                <div className="w-fil flex flex-col max-w-[400px]">
                    <div className="w-flex flex flex-col mb-5">
                    <h3 className="text-3xl font-semibold mb-2">Login</h3>
                    <p className="text-base mb-2">Welcome Back! Please Enter Your Details.</p>
                    </div>

                    <div className="w-full flex flex-col">
                        <input 
                        type="email"      
                        placeholder="Email"
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"></input>
                        
                        <input 
                        type="password"      
                        placeholder="password"
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"></input>
                    
                    </div>

                    <div className="w-full flex intems-center justify-between">
                        <div className="w-full flex">
                            <input type="checkbox" className="w-4 h-4 mr-2"/>
                            <p className="text-sm"> Remember Me</p>
                        </div>
                    
                    <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline-offset-2">Forget password ?</p>
                    </div>

                    <div className="w-full flex flex-col my-4">
                        <button className="w-full bg-[#060606] my-2 text-white font-semibold border-2 rounded-md p-4 text-center flex items-center justify-center hover:text-black hover:bg-white border-black">
                            Login
                        </button>
                        <button className="w-full bg-white border-2 border-black my-2 text-[#060606] font-semibold rounded-md p-4 text-center flex items-center justify-center hover:bg-[#060606] hover:my-2  hover:text-white">
                            Register
                        </button>
                    
                    </div>

                    <div className="w-full flex items-center justify-center relative py-2">
                        <div class ="w-full h-[1px] bg-black"></div>
                        <p class="text-lg absolute  text-black/80 bg-[#E0E0E0]"></p>
                    </div>
                    <div className='pt-5 pl-10'>
                    <GoogleOAuthProvider clientId="888255469108-d8pet2nr7lr10qc04abnad2o8cturr6m.apps.googleusercontent.com">
                    <GoogleLogin
                  onSuccess={credentialResponse => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                    />
                  </GoogleOAuthProvider>
                  </div>

                    
                    
                </div>
            <div className="  justify-center items-center">
                <p className=" text-sm font-normal text-[#060606]">Dont have a account? <span className="font-semibold underline ring-offset-2 cursor-pointer">Sign up for free</span></p>
                
            </div>

            </div>
        </div>
    )
}

export default LoginPage;