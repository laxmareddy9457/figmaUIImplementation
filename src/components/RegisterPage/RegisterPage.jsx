import React from 'react'
import './RegisterPage.css'
import '../Loginpage/Loginpage.css'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className='min-h-screen registerContainer'>
            <div className='registerCard'>
                <h1 className="logoText">DFW Operating Authority Online Portal(DEV)</h1>
                <form className="registerMainBody">
                    <h1 className="registerHeading">Create your Account</h1>

                    <div className="inputGroup">
                        <label className="inputLabel fontSmall text-[14px]" htmlFor="firstname" required >First Name<span className='ml-1 text-red-600'>*</span></label>
                        <section className='inputContainer'>
                            <input type="text" id="firstname" className="inputField fontSmall" placeholder="Enter First Name" />

                        </section>
                    </div>
                    <div className="inputGroup">
                        <label className="inputLabel fontSmall text-[14px]" htmlFor="lastname" required >Last Name<span className='ml-1 text-red-600'>*</span></label>
                        <section className='inputContainer'>
                            <input type="text" id="lastname" className="inputField fontSmall" placeholder="Enter Last Name" />
                        </section>
                    </div>
                    <div className="inputGroup">
                        <label className="inputLabel fontSmall text-[14px]" htmlFor="title" required >Title<span className='ml-1 text-red-600'>*</span></label>
                        <section className='inputContainer'>
                            <input type="text" id="title" className="inputField fontSmall" placeholder="Enter Title" />
                        </section>
                    </div>
                    <div className="inputGroup">
                        <label className="inputLabel fontSmall text-[14px]" htmlFor="email" required >Email<span className='ml-1 text-red-600'>*</span></label>
                        <section className='inputContainer'>
                            <input type="email" id="email" className="inputField fontSmall" placeholder="Enter Email" />
                        </section>
                    </div>
                    <div className='flex justify-end w-full gap-3 mt-10 buttonContainer'>
                        <Link to="/" className='btnWthOutline'>Cancel</Link>
                        <button type="submit" className="submitBtn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage