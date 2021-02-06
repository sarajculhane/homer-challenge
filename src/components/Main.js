import React , {useState, useEffect} from 'react'
import {ImageContext, ImageProvider} from './ImageContext'
import {ImageSelector, Carousel} from './index'

const Main = () => {
    return (
        <div className='main'>
            <ImageProvider>
                <ImageSelector />
                <Carousel />
            </ImageProvider>
            
        </div>
    )
}

export default Main;