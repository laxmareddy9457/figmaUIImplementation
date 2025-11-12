import './Loginpage.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Loginpage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="min-h-screen mainContainerLogin">
            <form className="loginCard">
                <h1 className="heading">DFW Customer Portal (DEV)</h1>
                <div className="loginMainBody">
                    <h1 className="loginHeading fontSmall">Login into your Account</h1>

                    <div className="inputGroup">
                        <label className="inputLabel fontSmall" htmlFor="email">Email</label>
                        <section className='inputContainer'>
                            <input type="email" id="email" className="inputField fontSmall" placeholder="Enter your username" />
                        </section>
                    </div>
                    <div className="inputGroup">
                        <label className="inputLabel fontSmall" htmlFor="password">Password</label>
                        <section className='inputContainer'>
                            <input type={showPassword ? "text" : "password"} id="password" className="inputField fontSmall" placeholder="Enter Password" />
                            {showPassword ? <FaRegEyeSlash className='cursor-pointer eyeicon' size={20} onClick={togglePasswordVisibility} /> : <FaRegEye className='cursor-pointer eyeicon' size={20} onClick={togglePasswordVisibility} />}
                        </section>
                    </div>
                    <div className="flex justify-end w-full">
                        <Link to="/" className="text-sm transition-colors text-[#2563EB]  hover:underline max-sm:text-xs">Forgot Password?</Link>
                    </div>
                    <div className='flex flex-col gap-[24px] w-full'>
                        <button type="submit" className="loginBtn">
                            Login</button>
                        <Link to="/register" className="createAccountBtn">Create New Account</Link>
                    </div>

                </div >
            </form >
        </div >
    );
};

export default Loginpage;
