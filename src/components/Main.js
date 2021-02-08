import React from 'react'
import {ImageContext, ImageProvider} from './ImageContext'
import {ImageSelector, Carousel, Header} from './index'


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