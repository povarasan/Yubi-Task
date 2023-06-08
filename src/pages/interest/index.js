import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout';
import './index.css';
import cat from "../../asset/cat.png";
import cup from "../../asset/cup.png"
import tick from "../../asset/tick.png"
import piece from "../../asset/piece.png"
import paw from "../../asset/paw.png"
import bag from "../../asset/bag.png"
import arrow from "../../asset/arrow.png"


const Interest = () => {
    const navigate = useNavigate()

    const [selectedTab, setSelectedTab] = useState('');
    const [active, setActive] = useState(false)
    const [one, setOne] = useState("")

    const handleTabChange = async (tab) => {
        setSelectedTab(tab);
        setActive(true)

    };

    const onChangeVal = async (tab) => {
        try {
            await setLocalStorageItem('Local', { tab });
            console.log("232", tab)
        } catch (error) {
            console.error('Error saving data:', error);
        }

    }

    const setLocalStorageItem = (key, value) => {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                console.log(value, "onononok");
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        if (selectedTab === "") {
            alert("Enter any Tab")
        } else {
            navigate("../welcome")
        }
    };
    return (
        <div>
            <Layout>
                <div className='wrapper'>
                    <div className='login-cont'>
                        <div style={{ textAlign: 'center', margin: '20px' }}>
                            <h2 style={{ fontSize: "24px", width: "358px", textAlign: "center", marginLeft: 25 }}>Which Service are you interested in?</h2>
                            <p style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.54)", marginTop: "10px" }}>This will help us in Providing you the professional services </p>
                        </div>
                        <form onSubmit={handleSubmit} style={{ width: '400px', margin: '50px auto' }}>

                            <div style={{ width: '360px', margin: '50px auto' }}>
                                <div onClick={() => handleTabChange('tab1')}
                                    style={{
                                        flex: 1, display: "flex", border: "2px solid rgba(0, 0, 0, 0.08)", borderRadius: '25px',
                                        height: "56px", width: '100%', padding: '10px 20px', background: selectedTab === 'tab1' ? "#B7ADA1" : "#F1F4F7", color: 'rgba(0, 0, 0, 0.54)', outline: 'none', cursor: 'pointer'
                                    }}
                                >
                                    <img style={{ height: "20px", width: "10px", marginTop: 8, flex: 0.1 }} src={paw} alt="My Image" />

                                    <p onClick={() => onChangeVal("Behavioural trainer")} one style={{ flex: 0.8, fontSize: "16px", marginTop: 10, marginLeft: 15, color: selectedTab === 'tab1' ? "#fff" : "#000" }}>Behavioural trainer</p>

                                    {
                                        selectedTab === 'tab1' ?
                                            <img style={{ flex: 0.1, height: "20px", width: "5px", marginTop: 8 }} src={tick} alt="My Image" /> : null
                                    }

                                </div>


                                <div

                                    onClick={() => handleTabChange('tab2')}

                                    style={{
                                        flex: 1, display: "flex", border: "2px solid rgba(0, 0, 0, 0.08)", marginTop: "10px",
                                        borderRadius: '25px', height: "56px", width: '100%', padding: '10px 20px', background: selectedTab === 'tab2' ? "#B7ADA1" : "#F1F4F7", color: 'rgba(0, 0, 0, 0.54)', outline: 'none', cursor: 'pointer'
                                    }}
                                >
                                    <img style={{ height: "20px", width: "10px", marginTop: 8, flex: 0.1 }} src={cup} alt="My Image" />
                                    <p onClick={() => onChangeVal("Potty trainer")} one style={{ flex: 0.8, fontSize: "16px", marginTop: 10, marginLeft: 15, color: selectedTab === 'tab2' ? "#fff" : "#000" }}>Potty trainer</p>
                                    {
                                        selectedTab === 'tab2' ?
                                            <img style={{ flex: 0.1, height: "20px", width: "5px", marginTop: 8 }} src={tick} alt="My Image" /> : null
                                    }



                                </div>

                                <div
                                    onClick={() => handleTabChange('tab3')}

                                    style={{
                                        flex: 1, display: "flex", border: "2px solid rgba(0, 0, 0, 0.08)", marginTop: "10px", borderRadius: '25px',
                                        height: "56px", width: '100%', padding: '10px 20px', background: selectedTab === 'tab3' ? "#B7ADA1" : "#F1F4F7", color: 'rgba(0, 0, 0, 0.54)', outline: 'none', cursor: 'pointer'
                                    }}
                                >

                                    <img style={{ height: "20px", width: "10px", marginTop: 8, flex: 0.1 }} src={piece} alt="My Image" />
                                    <p onClick={() => onChangeVal("Appetite trainer")} style={{ flex: 0.8, fontSize: "16px", marginTop: 10, marginLeft: 15, color: selectedTab === 'tab3' ? "#fff" : "#000" }}>Appetite trainer</p>
                                    {
                                        selectedTab === 'tab3' ?
                                            <img style={{ flex: 0.1, height: "20px", width: "5px", marginTop: 8 }} src={tick} alt="My Image" /> : null
                                    }


                                </div>


                                <div
                                    onClick={() => handleTabChange('tab4')}
                                    style={{
                                        flex: 1, display: "flex", border: "2px solid rgba(0, 0, 0, 0.08)", marginTop: "10px",
                                        borderRadius: '25px', height: "56px", width: '100%', padding: '10px 20px', background: selectedTab === 'tab4' ? "#B7ADA1" : "#F1F4F7", color: 'rgba(0, 0, 0, 0.54)', outline: 'none', cursor: 'pointer'
                                    }}
                                >
                                    <img style={{ height: "20px", width: "10px", marginTop: 8, flex: 0.1 }} src={cat} alt="My Image" />

                                    <p onClick={() => onChangeVal("grooming service")} style={{ flex: 0.8, fontSize: "16px", marginTop: 10, marginLeft: 15, color: selectedTab === 'tab4' ? "#fff" : "#000" }}>
                                        grooming service</p>
                                    {
                                        selectedTab === 'tab4' ?
                                            <img style={{ flex: 0.1, height: "20px", width: "5px", marginTop: 8 }} src={tick} alt="My Image" /> : null
                                    }

                                </div>


                                <div
                                    onClick={() => handleTabChange('tab5')}
                                    style={{
                                        flex: 1, display: "flex", border: "2px solid rgba(0, 0, 0, 0.08)", marginTop: "10px", borderRadius: '25px', height: "56px",
                                        width: '100%', padding: '10px 20px', background: selectedTab === 'tab5' ? "#B7ADA1" : "#F1F4F7", color: 'rgba(0, 0, 0, 0.54)', outline: 'none', cursor: 'pointer'
                                    }}
                                >
                                    <img style={{ height: "20px", width: "10px", marginTop: 8, flex: 0.1 }} src={bag} alt="My Image" />
                                    <p onClick={() => onChangeVal("Medical service")} style={{ flex: 0.8, fontSize: "16px", marginTop: 10, marginLeft: 15, color: selectedTab === 'tab5' ? "#fff" : "#000" }}>Medical service</p>
                                    {
                                        selectedTab === 'tab5' ?
                                            <img style={{ flex: 0.1, height: "20px", width: "5px", marginTop: 8 }} src={tick} alt="My Image" /> : null
                                    }

                                </div>

                            </div>

                            <div style={{ width: '360px', textAlign: 'center', margin: '50px auto', }}>
                                <button style={{
                                    display: "inline-block", borderRadius: '10px', height: "56px", border: "none", width: '100%',
                                    padding: '10px 20px', background: active ? "#B7ADA1" : '#B7ADA133', color: '#fff', outline: 'none', cursor: 'pointer'
                                }}
                                    type="submit"
                                >
                                    <p style={{ fontSize: "16px" }}>Done</p>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default Interest;
