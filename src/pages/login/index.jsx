import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout';
import './index.css';
import google from "../../asset/google.png";
import arrow from "../../asset/arrow.png"

const Login = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [navigateToNextPage, setNavigateToNextPage] = useState(false);
    const [active, setActive] = useState(false);

    const validateEmail = (value) => {
        // Email regular expression pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value) {
            setEmailError('Email is required');
            setActive(false)
        } else if (!emailRegex.test(value)) {
            setEmailError('Invalid email address');
            setActive(false)
        } else {
            setEmailError("");
            setNavigateToNextPage(true);
            setActive(true)
        }
    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        validateEmail(value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateEmail(email);
        if (navigateToNextPage) {
            setNavigateToNextPage(false);
            navigate("./otp")
        }
    };


    const handleButtonClick = () => {
        window.location.href = 'https://accounts.google.com/';
    };

    const navigate = useNavigate()
    return (
        <div>
            <Layout>
                <div className='wrapper'>
                    <div className='login-cont'>
                            <div style={{ textAlign: 'center', margin: '20px' }}>
                                <h1 style={{ fontSize: "28px", fontFamily: 'Anek Latin' }}>Get Started</h1>

                                <div style={{ margin: '40px 0px' }}>
                                    <div class="input-container">
                                        <input type="email" value={email} onChange={handleEmailChange} id="input-field" placeholder=" " style={{ display: "inline-block", borderRadius: '10px', height: "56px", border: "2px solid rgba(0, 0, 0, 0.08)" }} />
                                        <label for="input-field">Mobile/Email</label>
                                        {emailError && <p style={{ marginTop: 10, color: "red" }}>{emailError}</p>}
                                    </div>
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ width: '100px', border: '1px solid #00000014', margin: '0px 20px' }}></div>
                                <p>Or</p>
                                <div style={{ width: '100px', border: '1px solid #00000014', margin: '0px 20px' }}></div>
                            </div>

                            <div style={{ width: '400px', margin: '50px auto' }}>
                                <button onClick={handleButtonClick}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '10px', height: "56px", border: "none", width: '100%', padding: '10px 20px', background: '#3E6464', color: '#fff', cursor: 'pointer' }}>
                                    <img style={{ height: "20px", width: "20px", marginRight: 10 }} src={google} alt="My Image" />
                                    <p style={{ fontSize: "16px", marginLeft: 5, fontFamily: 'Anek Latin' }}> Continue with google</p>
                                </button>
                            </div>

                            <div style={{ width: '400px', textAlign: 'center', margin: '50px auto' }}>
                                <button style={{
                                    display: "flex", borderRadius: '10px', height: "56px", border: "none", alignItems: "center", justifyContent: "center",
                                    width: '100%', padding: '10px 20px', background: active ? "#B7ADA1" : '#B7ADA133', color: '#fff', outline: 'none', cursor: 'pointer',
                                }}
                                onClick={handleSubmit}
                                    type="submit"
                                >
                                    <p style={{ fontSize: "16px", marginLeft: 5, fontFamily: 'Anek Latin', alignItems: "center", justifyContent: "center", }}>Continue</p>
                                    <img style={{ height: "13px", width: "16px", marginLeft: 15, marginTop: 3 }} src={arrow} alt="My Image" />
                                </button>
                            </div>
                    </div>

                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '14px', color: "#0000008A", position: "relative", bottom: 25 }}>By continuing, you agree to our <span style={{ color: "#1A457C" }}>terms</span> and <span style={{ color: "#1A457C" }}>policies.</span></p>
                </div>
            </Layout>
        </div>
    )
}

export default Login;