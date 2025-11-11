import './Loginpage.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Loginpage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="min-h-screen MaincontainerLogin">
            <form className="logincard">
                <h1 className="heading">DFW Customer Portal (DEV)</h1>
                <div className="loginmainbody">
                    <h1 className="loginheading">Login into your Account</h1>

                    <div className="inputgroup">
                        <label className="inputlabel" htmlFor="email">Email</label>
                        <section className='inputcon'>
                            <input type="email" id="email" className="inputfield" placeholder="Enter your username" />
                        </section>
                    </div>
                    <div className="inputgroup">
                        <label className="inputlabel" htmlFor="email">Password</label>
                        <section className='inputcon'>
                            <input type={showPassword ? "text" : "password"} id="email" className="inputfield" placeholder="Enter Password" />
                            {showPassword ? <FaEyeSlash className='cursor-pointer eyeicon' size={15} onClick={togglePasswordVisibility} /> : <FaEye className='cursor-pointer eyeicon' size={15} onClick={togglePasswordVisibility} />}
                        </section>
                    </div>
                    <div className="flex justify-end w-full">
                        <Link to="/" className="text-sm transition-colors hover:text-blue-800 hover:underline forgotpass">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="loginbtn">
                        Login</button>
                    <Link to="/register" className="createaccountbtn">Create New Account</Link>
                </div >
            </form >
        </div >
    );
};

export default Loginpage;
