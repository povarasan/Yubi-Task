import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import './index.css'
import location from '../../asset/location.png';
import paw from '../../asset/paw.png';
import user from '../../asset/user.png';
import pet from '../../asset/pet.png'

const Welcome = () => {
    const [data, setData] = useState(null);
    const[content,setContent]=useState(null);
   
    console.log(content?.tab,"00000");
    const getLocalStorageItem = (key) => {
        return new Promise((resolve, reject) => {
          try {
            const value = JSON.parse(localStorage.getItem(key));
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const retrievedData = await getLocalStorageItem('myKey');
          const retrieved = await getLocalStorageItem("Local");
          setData(retrievedData);
          setContent(retrieved)
          console.log(retrieved,"Local");
        } catch (error) {
          console.error('Error retrieving data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div>
            <Layout>
                <div className='wrapper'>
                    <div className='login-cont'>
                        <div style={{ textAlign: 'center', margin: '20px' }}>
                        <h1 style={{ fontSize: "24px", fontFamily: 'Anek Latin',marginTop:50 }}>Welcome, {data?.formData?.name}</h1>
                            <p style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.54)", marginTop: "50px", marginBottom: "25px" }}>
                                Thanks for letting us know the required information !
                            </p>

                            <div style={{margin:40}}>
                                <div style={{ width: '356px', height: "56px",display:"flex", padding: '10px 20px', color: "rgba(0, 0, 0, 0.54)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: " 8px", marginTop: "20px", background: '#fff', color: ' rgba(0, 0, 0, 0.54)' }} >
                                <img style={{height:"20px",width:"20px",marginTop:8}} src={user} alt="My Image" />
                                    <p style={{ marginTop: 8, fontSize: "16px",marginLeft:10 }}>{data?.formData?.name}</p>
                                </div>
                                <div style={{ width: '356px', height: "56px",display:"flex", padding: '10px 20px', color: "rgba(0, 0, 0, 0.54)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: " 8px", marginTop: "20px", background: '#fff', color: ' rgba(0, 0, 0, 0.54)' }} >
                                <img style={{height:"20px",width:"20px",marginTop:8}} src={location} alt="My Image" />
                                    <p style={{ marginTop: 8, fontSize: "16px",marginLeft:10 }}>{data?.formData?.email}</p>
                                </div>
                                <div style={{ width: '356px', height: "56px",display:"flex", padding: '10px 20px', color: "rgba(0, 0, 0, 0.54)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: " 8px", marginTop: "20px", background: '#fff', color: ' rgba(0, 0, 0, 0.54)' }} >
                                <img style={{height:"20px",width:"17px",marginTop:8}} src={pet} alt="My Image" />
                                    <p style={{ marginTop: 8, fontSize: "16px",marginLeft:10 }}>{data?.formData?.password}</p>
                                </div>
                                <div style={{ width: '356px', height: "56px",display:"flex", padding: '10px 20px', color: "rgba(0, 0, 0, 0.54)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: " 8px", marginTop: "20px", background: '#fff', color: ' rgba(0, 0, 0, 0.54)' }} >
                                <img style={{height:"20px",width:"20px",marginTop:8}} src={paw} alt="My Image" />
                                    <p style={{ marginTop: 8, fontSize: "16px",marginLeft:10 }}>{content?.tab}</p>
                                </div>
                        
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Welcome;