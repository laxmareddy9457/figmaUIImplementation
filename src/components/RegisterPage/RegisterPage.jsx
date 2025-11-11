import React from 'react'
import './RegisterPage.css'
import '../Loginpage/Loginpage.css'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className='registerCon'>
            <div className='registercard'>
                <div className="logoCon">
                    <h1 className="logotext">DFW Operating Authority Online Portal(DEV)</h1>
                </div>
                <form className="registermainbody">
                    <h1 className="registerheading">Create your Account</h1>

                    <div className="inputgroup">
                        <label className="inputlabel text-[14px]" htmlFor="firstname" required >First Name<span className='ml-1 text-red-600'>*</span></label>
                        <section className='inputcon'>
                            <input type="text" id="firstname" className="inputfield" placeholder="Enter First Name" />

                        </section>
                    </div>
                    <div className="inputgroup">
                        <label className="inputlabel text-[14px]" htmlFor="lastname" required >Last Name<span className='ml-1 text-red-600'>*</span></label>
                        <section className='inputcon'>
                            <input type="text" id="lastname" className="inputfield" placeholder="Enter Last Name" />
                        </section>
                    </div>
                    <div className="inputgroup">
                        <label className="inputlabel text-[14px]" htmlFor="title" required >Title<span className='ml-1 text-red-600'>*</span></label>
                        <section className='inputcon'>
                            <input type="text" id="title" className="inputfield" placeholder="Enter Title" />
                        </section>
                    </div>
                    <div className="inputgroup">
                        <label className="inputlabel text-[14px]" htmlFor="email" required >Email<span className='ml-1 text-red-600'>*</span></label>
                        <section className='inputcon'>
                            <input type="email" id="email" className="inputfield" placeholder="Enter Email" />
                        </section>
                    </div>
                    <div className='flex justify-end w-full gap-3 mt-10 buttoncon'>
                        <Link to="/" className='btnwthOutline'>Cancel</Link>
                        <button type="submit" className="submitbtn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage