import React, {useReducer} from 'react'
import data from '../carouselImages.json'

const initialState = {
    selector : data.carouselImages,
    carousel: [data.carouselImages[0]]}

const ImageContext = React.createContext(initialState)

let reducer = (state, action) => {
    console.log(action, 'the action', state)
    switch (action.type) {
        case 'ADD_TO_CAROUSEL':
            return {...state, selector : state.selector.filter((val , id) => !action.payload.includes((id+1).toString()))}
        case 'REMOVE_FROM_CAROUSEL':
            return {...state, selector : state.selector.filter((val , id) => action.payload.includes((id+1).toString()))}
        
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