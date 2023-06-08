import React, { useState, useRef } from 'react';
import { useNavigate, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import './index.css';
import arrow from "../../asset/arrow.png";
import location from '../../asset/location.png';
import paw from '../../asset/paw.png';
import user from '../../asset/user.png';
import pet from '../../asset/pet.png'


const Basic = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [selectedTab, setSelectedTab] = useState('');
    const [active, setActive] = useState(false)

    const setLocalStorageItem = (key, value) => {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };



    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const handleInputChange = async (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        try {
            await setLocalStorageItem('myKey', { formData });
            console.log('form', formData);
        } catch (error) {
            console.error('Error saving data:', error);
        }

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};
        if (formData.name.trim() === '') {
            validationErrors.name = 'Name is required';
        }

        if (selectedTab === '') {
            validationErrors.act = 'Check above tab';
        }

        if (formData.email.trim() === '') {
            validationErrors.email = 'Cat name is required';
        }

        if (formData.password.trim() === '') {
            validationErrors.password = 'Address is required';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setActive(true)
            navigate("../interest", { some: formData.email })
        }
    };


    return (
        <div>
            <Layout>
                <div className='wrapper'>
                    <div className='login-cont'>
                        <div style={{ textAlign: 'center', margin: '20px' }}>
                            <h2>Enter your basic details</h2>
                            <p style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.54)", marginTop: "10px" }}>This is how other professionals and businesses will see you.</p>
                        </div>
                        <form onSubmit={handleSubmit} style={{ width: '400px', margin: 30 }}>
                            <p style={{ fontSize: "16px", marginLeft: "24px", color: "rgba(0, 0, 0, 0.54)", marginBottom: "10px" }}>Title</p>
                            <div style={{ paddingLeft: "20px", display: "flex" }}>
                                <div onClick={() => handleTabChange('tab2')}
                                    style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: "10px", borderRight: "none", border: "2px solid rgba(0, 0, 0, 0.08)", height: "56px", width: '92px', padding: '15px 35px', background: selectedTab === 'tab2' ? "#B7ADA1" : '#fff', color: 'rgba(0, 0, 0, 0.54)', outline: 'none', cursor: 'pointer' }}
                                >Mr.</div>
                                <div onClick={() => handleTabChange('tab3')}
                                    style={{
                                        height: "56px", width: "90px", padding: '15px 30px', border: "2px solid rgba(0, 0, 0, 0.08)",
                                        background: selectedTab === 'tab3' ? "#B7ADA1" : '#fff',
                                        color: 'rgba(0, 0, 0, 0.54)', outline: 'none', cursor: 'pointer'
                                    }}
                                >Ms.</div>
                                <div
                                    onClick={() => handleTabChange('tab4')}
                                    style={{ height: "56px", width: '90px', padding: '15px 30px', borderLeft: "none", border: "2px solid rgba(0, 0, 0, 0.08)", background: selectedTab === 'tab4' ? "#B7ADA1" : '#fff', color: 'rgba(0, 0, 0, 0.54)', outline: 'none', cursor: 'pointer' }}
                                >Mrs.</div>
                                <div
                                    onClick={() => handleTabChange('tab5')}
                                    style={{
                                        borderTopRightRadius: '10px', borderBottomRightRadius: "10px", borderLeft: "none",
                                        border: "2px solid rgba(0, 0, 0, 0.08)", height: "56px", width: '92px', padding: '15px 30px', background: selectedTab === 'tab5' ? "#B7ADA1" : '#fff', color: 'rgba(0, 0, 0, 0.54)', outline: 'none', cursor: 'pointer'
                                    }}
                                >other</div>
                            </div>
                            {errors.act ? <span style={{ color: "red", marginLeft: 22 }}>{errors.act}</span> : null}
                            <div style={{ margin: 20, postion: "relative" }}>
                                <div style={{
                                    flex: 1, display: "flex", borderRadius: '10px', height: "56px",
                                    border: "2px solid rgba(0, 0, 0, 0.08)", width: "360px", backgroundColor: "white"
                                }}>
                                    <img style={{ height: "20px", width: "20px", margin: 15 }} src={user} alt="My Image" />
                                    <input type="text" id="input-field" placeholder='Your full name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        style={{ border: "none" }} />
                                </div>
                                {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

                                <div style={{
                                    flex: 1, display: "flex", borderRadius: '10px', height: "56px",
                                    border: "2px solid rgba(0, 0, 0, 0.08)", width: "360px", backgroundColor: "white", marginTop: 20
                                }}>
                                    <img style={{ height: "20px", width: "20px", margin: 15 }} src={location} alt="My Image" />
                                    <input type="text" id="input-field" placeholder='Your Cats name'
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        style={{ border: "none" }} />
                                </div>
                                {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                                <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.54)", marginTop: "15px" }}>
                                    Note: please specify full address.
                                </p>
                                <div style={{
                                    flex: 1, display: "flex", borderRadius: '10px', height: "56px", marginTop: 10,
                                    border: "2px solid rgba(0, 0, 0, 0.08)", width: "360px", backgroundColor: "white"
                                }}>
                                    <img style={{ height: "20px", width: "20px", margin: 15 }} src={pet} alt="My Image" />
                                    <input
                                        id="input-field" placeholder='Your address'
                                        type="text"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        style={{ border: "none", }}
                                    />
                                </div>
                                {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
                                <div style={{ width: '360px', textAlign: 'center', marginTop: 25 }}>
                                    <button style={{
                                        display: "flex", background: selectedTab == "" || formData.name == "" || formData.email == "" || formData.password == "" ? '#B7ADA133' : "#B7ADA1",
                                        borderRadius: '10px', height: "56px", alignItems: "center", justifyContent: "center", border: "2px solid rgba(0, 0, 0, 0.08)",
                                        width: '100%', padding: '10px 20px', color: '#fff', outline: 'none', cursor: 'pointer',
                                    }} type="submit">
                                        <p style={{ fontSize: "16px", marginLeft: 5, fontFamily: 'Anek Latin', alignItems: "center", justifyContent: "center", }}>Continue</p>
                                        <img style={{ height: "13px", width: "16px", marginLeft: 15, marginTop: 3 }} src={arrow} alt="My Image" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default Basic;
