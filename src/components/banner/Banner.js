import React from 'react'
import './banner.scss'

const Banner = () => {
    return (
        <div className='container-fluid banner'>
            <div className='row justify-content-between'>
                <div className='col-md-6 px-5'>
                    <h1 className='display-3 banner__title'>
                        Find <span className='fw-bold'>Adventures, </span>
                        you want to talk about
                    </h1>
<div className="input-group mt-5">
  <input type="text" className="form-control" placeholder="Search Tour" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-banner-search" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
</div>

                </div>
                <div className='col-md-2 button-work-div'>
                <button className="btn btn-banner-work">How it works <i className="fas fa-angle-right"></i></button>
                </div>
            </div>
            <img src='para.png' className='para-img' alt='para-glider'/>
        </div>
    )
}

export default Banner
