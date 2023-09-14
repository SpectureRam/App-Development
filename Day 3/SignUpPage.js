import React, { useState } from 'react';
import Cover_img from './image.jpg';

const countries = [
    { label: 'United States', value: '+1', flag: '🇺🇸' },
    { label: 'United Kingdom', value: '+44', flag: '🇬🇧' },
    // Add more countries here
];

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState(countries[0]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showErrors, setShowErrors] = useState(false);

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8 && password.length <= 15;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowErrors(true);

        if (password !== confirmPassword) {
            setPasswordError("The passwords do not match.");
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError("Password must be between 8 and 15 characters.");
            return;
        }

        if (!validateEmail(email)) {
            setEmailError("Invalid email address.");
            return;
        }

        if (firstName === lastName) {
            setEmailError("First name and last name cannot be the same.");
            return;
        }

        setPasswordError('');
        setEmailError('');

        // Perform registration logic here
        // You can send the form data to your server or perform any other necessary actions
    }

    return (
        <div className="w-full h-screen flex items-start">
            <div className="relative w-1/2 h-full flex flex-col">
                <div className="absolute top-[0%] left-[35%] flex flex-col">
                    <h1 className="text-4xl text-white font-bold my-4">E-commerce store</h1>
                    <p className="text-base text-white font-semibold">Sign up and get started</p>
                </div>
                <img src={Cover_img} className="w-full h-full object-cover" alt="Cover Image" />
            </div>

            <div className="w-1/2 h-full bg-[#E0E0E0] flex flex-col p-5 justify-between items-center">
                <div className="w-fil flex flex-col max-w-[400px]">
                    <div className="w-flex flex flex-col mb-5">
                        <h3 className="text-3xl font-semibold mb-2">Sign Up</h3>
                        <p className="text-base mb-2">Create a New Account</p>
                    </div>

                    <div className="w-full flex flex-col">
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="flex-1 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="flex-1 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${
                                !showErrors || validateEmail(email) ? '' : 'border-red-500'
                            }`}
                        />
                        {showErrors && !validateEmail(email) && <p className="text-red-500">Invalid email address.</p>}

                        <div className="flex items-center">
                            <div className="w-full">
                                <select
                                    value={countryCode.value}
                                    onChange={(e) => {
                                        const selectedCountry = countries.find((country) => country.value === e.target.value);
                                        setCountryCode(selectedCountry || countries[0]);
                                    }}
                                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                                >
                                    {countries.map((country) => (
                                        <option key={country.value} value={country.value}>
                                            {country.flag} {country.label} ({country.value})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${
                                !showErrors || /^\d+$/.test(phoneNumber) ? '' : 'border-red-500'
                            }`}
                        />
                        {showErrors && !/^\d+$/.test(phoneNumber) && <p className="text-red-500">Phone number must contain only numbers.</p>}

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${
                                !showErrors || validatePassword(password) ? '' : 'border-red-500'
                            }`}
                        />
                        {showErrors && !validatePassword(password) && (
                            <p className="text-red-500">Password must be between 8 and 15 characters.</p>
                        )}

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ${
                                !showErrors || password === confirmPassword ? '' : 'border-red-500'
                            }`}
                        />
                        {showErrors && password !== confirmPassword && <p className="text-red-500">The passwords do not match.</p>}
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline-offset-2">
                            By signing up, you agree to our Terms and Privacy Policy
                        </p>
                    </div>

                    <div className="w-full flex flex-col my-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={() => setAgreeTerms(!agreeTerms)}
                                className="w-4 h-4 mr-2"
                            />
                            <p className="text-sm">I agree to the Terms and Conditions</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col my-4">
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-[#060606] my-2 text-white font-semibold border-2 rounded-md p-4 text-center flex items-center justify-center hover:text-black hover:bg-white border-black"
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-center relative py-2">
                        <div className="w-full h-[1px] bg-black"></div>
                        <p className="text-lg absolute  text-black/80 bg-[#E0E0E0]"></p>
                    </div>
                </div>

                <div className="justify-center items-center">
                    <p className="text-sm font-normal text-[#060606]">
                        Already have an account? <span className="font-semibold underline ring-offset-2 cursor-pointer">Log in</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
