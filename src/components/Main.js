import React , {useState, useEffect} from 'react'
import {ImageContext, ImageProvider} from './ImageContext'
import {ImageSelector, Carousel, CarouselImages, Header} from './index'


const Main = () => {
    return (
        <div className='main'>
            <ImageProvider>
                <Header />
                <ImageSelector />
                <Carousel />
            </ImageProvider>
            
        </div>
    )
}

export default Main;