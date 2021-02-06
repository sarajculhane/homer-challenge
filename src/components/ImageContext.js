import React from 'react'
import data from '../carouselImages.json'

const initialState = data.carouselImages

const ImageContext = React.createContext(initialState)

const ImageProvider = (props) => {
    return (
        <ImageContext.Provider value={initialState}>
            {props.children}
        </ImageContext.Provider>
    )
}

export {ImageContext, ImageProvider}