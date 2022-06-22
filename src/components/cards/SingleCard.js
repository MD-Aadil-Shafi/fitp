import React,{memo} from 'react'

const SingleCard = (props) => {
    return (
        <div className='col-md-2 shadow px-0 mb-3 single-card'>
                <img src={props.image} className='card-img' alt='img'/>
                <h5 className='p-3'>{props.hot && <><i className="fas fa-fire text-danger"></i>
                &nbsp;</> }{props.title}
                </h5>

                <h6 className='px-3 pt-2'>Store <i className="fas fa-store text-danger"></i>
                <span className='text-info'> Special Media</span>
                </h6>
                <h6 className='px-3 pt-2 fw-light'><i className="fas fa-users text-warning"></i>
                &nbsp;{props.people}
                </h6>
                <h6 className='px-3 pt-2 fw-light'><i className="far fa-clock text-warning"></i>
                &nbsp;{props.days}
                </h6>
                <div className='d-flex justify-content-between p-3'>
                    <div>
                    <i className="far fa-heart text-secondary"></i>
                    
                    <i className="fas fa-globe px-3"></i>
                    </div>
                    <div>
                    <h6 className='text-danger'>$ {props.price}</h6>
                        
                    </div>     
                </div>
                
                </div>
    )
}

export default memo(SingleCard);
