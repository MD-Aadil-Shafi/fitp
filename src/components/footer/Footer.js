import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div className='container-fluid py-3 text-center footer'>
            <p className='fw-light text-light pt-2 pb-0'>&copy; {new Date().getFullYear()} Re-Tour</p>
            
        </div>
    )
}

export default Footer
