import React, {useReducer} from 'react'
import data from '../carouselImages.json'

/*
This Context helps maintain the state between the ImageSelector
and the Carousel components

*/

// add a id property to the image data to later assist with sending correct images in state updates
data.carouselImages.forEach((img, idx) => img.id = idx+1)

// initialize all data for the Context's state

const initialState = {
    selector : data.carouselImages,
    carousel: []
}

// create context

const ImageContext = React.createContext(initialState)


// create reducer that will modify state based on the dispatched actions


/* Add to Carousel & Remove to View  actions are complementary as are 
 Remove from Carousel &Add to Viewer */

let reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CAROUSEL':
            return {...state, carousel : [...state.carousel,... action.payload]}
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

// Provider that is used in the Main.js to maintain state of the images at the global app level
const ImageProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ImageContext.Provider value={{state, dispatch}}>
            {props.children}
        </ImageContext.Provider>
    )
}

export {ImageContext, ImageProvider}