import React , {useState, useEffect} from 'react'
import {ImageContext, ImageProvider} from './ImageContext'
import {ImageSelector, Carousel, CarouselImages} from './index'

const Main = () => {
    return (
        <div className='main'>
            <ImageProvider>
                <ImageSelector />
                <Carousel />
                {/* <ImageViewer />
                 */}
            </ImageProvider>
            
        </div>
    )
}

export default Main;