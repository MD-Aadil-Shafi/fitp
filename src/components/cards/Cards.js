import React from 'react'
import './card.scss'
import SingleCard from './SingleCard'

const Cards = () => {

    return (
        <div className='container-fluid card-div mt-5 px-5'>
            <h1 className='fw-light'><span className='fw-bold'>Required </span> to Visit</h1>
            
            <div className='row justify-content-between'>
                <div className='col-md-5 mb-3'>
                    <img src='https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg' className='card-left-img' alt='img'/>
                </div>
                <SingleCard title={'Car Tour Africa 10 Days'} image={'https://cdn.pixabay.com/photo/2019/03/08/20/13/safari-4043090_960_720.jpg'} people={'4 people'} days={'10 days'} price={799.99} hot={true}/>
                <SingleCard title={'Cappadocia Turkey Scenic Tour'} image={'https://cdn.pixabay.com/photo/2015/06/11/08/58/cappadocia-805624_960_720.jpg'} people={'Couple'} days={'3 days tour'} price={699.99} hot={true}/>
                <SingleCard title={'New Zealand Hiking Tour'} image={'https://cdn.pixabay.com/photo/2017/06/03/08/10/queenstown-2368191_960_720.jpg'} people={'4 people'} days={'3 days tour'} price={899.99} hot={false}/>
                
            
                
            </div>

        </div>
    )
}

export default Cards
