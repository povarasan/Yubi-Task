import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout';
import './index.css';
import arrow from "../../asset/arrow.png"

const Otp = () => {
    const navigate = useNavigate()

    const [otp, setOTP] = useState(['', '', '', '']);
    const otpInputRefs = useRef([]);
    const [otpValue, setotpValue] = useState('');
    const [otpValueError, setotpValueError] = useState('');
    const [navigateToNextPage, setNavigateToNextPage] = useState(false);
    const [active, setActive] = useState(false);

    const validateotpValue = (value) => {


        if (!value) {
            setotpValueError('OTP is required');
            setActive(false)
        }
        else {
            setotpValueError("");
            setNavigateToNextPage(true)
            setActive(true)
        }
    };

    const handleOTPChange = (event, index) => {
        let { value } = event.target;
        value = value.slice(0, 1);

        const otpCopy = [...otp];
        otpCopy[index] = value;
        setOTP(otpCopy);
        setotpValue(value);
        validateotpValue(value);


        if (value === '' && index > 0) {
            otpInputRefs.current[index - 1].focus();
        } else if (index < otpInputRefs.current.length - 1) {
            otpInputRefs.current[index + 1].focus();
        }
    };

    const handleOTPPaste = (event) => {
        const otpString = event.clipboardData.getData('Text');
        const otpArray = otpString.split('').slice(0, 4);
        const otpCopy = Array(4).fill('');

        otpArray.forEach((digit, index) => {
            otpCopy[index] = digit;
        });

        setOTP(otpCopy);
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
            otpInputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateotpValue(otpValue);
        if (navigateToNextPage) {
            setNavigateToNextPage(false);
            navigate("../basic")
        }

    };

    return (
        <div>
            <Layout>
                <div className='wrapper'>
                    <form onSubmit={handleSubmit} className='login-cont'>
                        <div style={{ textAlign: 'center', margin: '20px' }}>
                            <h1 style={{ fontSize: "28px", fontFamily: 'Anek Latin' }}>Otp Verification</h1>
                            <p style={{ fontFamily: 'Anek Latin', fontSize: "16px", color: " rgba(0, 0, 0, 0.54)", marginLeft: 80, width: "288px", marginTop: 30 }}>We have sent a one time password (OTP) to your mail id</p>
                        </div>

                        <div style={{ display: "flex", marginLeft: 10, marginTop: 50 }}>
                            {otp.map((digit, index) => (
                                <div style={{ width: '50px', textAlign: 'center', marginLeft: 50 }}>
                                    <input type="text" id="input-field" placeholder=" "
                                        key={index}
                                        inputMode="numeric"
                                        value={digit}
                                        maxLength={1}
                                        onChange={(event) => handleOTPChange(event, index)}
                                        onPaste={handleOTPPaste}
                                        onKeyDown={(event) => handleKeyDown(event, index)}
                                        ref={(inputRef) => (otpInputRefs.current[index] = inputRef)}
                                        style={{
                                            borderRadius: "8px", border: "2px solid rgba(0, 0, 0, 0.08)", textAlign: "center",
                                            width: "56px", height: "56px"
                                        }} />
                                </div>

                            ))}

                        </div>
                        {otpValueError && <p style={{ marginTop: 10, color: "red", marginLeft: 66 }}>{otpValueError}</p>}
                        <div>
                            <p style={{ margin: 30, marginLeft: 62, fontFamily: 'Anek Latin', fontSize: "16px", color: " rgba(0, 0, 0, 0.54)" }}>Resend OTP in
                                <span style={{ color: "#1A457C" }}> 2:59</span>
                            </p>
                        </div>


                        <div style={{ width: '400px', textAlign: 'center', margin: '50px auto' }}>
                            <button style={{
                                display: "flex", borderRadius: '10px', height: "56px", border: "none", alignItems: "center", justifyContent: "center",
                                width: '100%', padding: '10px 20px', background: active ? "#B7ADA1" : '#B7ADA133', color: '#fff', outline: 'none', cursor: 'pointer',
                            }} type="submit"
                            >
                                <p style={{ fontSize: "16px", marginLeft: 5, fontFamily: 'Anek Latin', alignItems: "center", justifyContent: "center", }}>Continue</p>
                                <img style={{ height: "13px", width: "16px", marginLeft: 15, marginTop: 3 }} src={arrow} alt="My Image" />
                            </button>
                        </div>
                    </form>

                </div>

            </Layout>
        </div>
    )
}

export default Otp;
