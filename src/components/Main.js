import React , {useState, useEffect} from 'react'
import data from '../carouselImages.json'
import {ImageSelector, Carousel} from './index'


const Main = () => {
    return (
        <div className='main'>
            <ImageSelector data={data}/>
            <Carousel />
            
        </div>
    )
}

export default Main;