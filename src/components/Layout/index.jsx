import React from 'react'
import Picture from './picture'
import './index.css';

const Layout = (props) => {
    return (
        <div className='wrapper'>
            <div className='image-container'>
                <div className='image'>
                    <Picture />
                </div>
            </div>
            <div className='contant-wrapper'>
              {props.children}
            </div>
        </div>
    )
}

export default Layout;