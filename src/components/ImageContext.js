import React, {useReducer} from 'react'
import data from '../carouselImages.json'

data.carouselImages.forEach((img, idx) => img.id = idx+1)

const initialState = {
    selector : data.carouselImages,
    carousel: []
}

const ImageContext = React.createContext(initialState)

let reducer = (state, action) => {
    console.log(state.carousel, state.selector)
    switch (action.type) {
        case 'ADD_TO_CAROUSEL':
            return {...state, carousel : action.payload}
        case 'REMOVE_FROM_VIEWER' :
            return {...state, selector : state.selector.filter((img) => !action.payload.map((val) => val.id).includes(img.id))}
        case 'REMOVE_FROM_CAROUSEL':
            return {...state, carousel: state.carousel.filter((img) => !action.payload.map((val) => val.id).includes(img.id))}
        case 'ADD_TO_VIEWER' :
            return {...state, selector: [...state.selector, ...action.payload]}
        
        default :
            return initialState
    }
}

const ImageProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ImageContext.Provider value={{state, dispatch}}>
            {props.children}
        </ImageContext.Provider>
    )
}

export {ImageContext, ImageProvider}