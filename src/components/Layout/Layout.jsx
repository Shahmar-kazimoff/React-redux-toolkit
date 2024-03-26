import React from 'react';
import Navbar from '../Header/Navbar/Navbar';

function Layout({ children }) {
    return (
        <div>
            <div className='relative z-10'>
                <Navbar />
            </div>
            {children}
        </div>
    );
}

export default Layout;
