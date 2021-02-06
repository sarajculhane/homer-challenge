import React, {useContext, useState} from 'react'
import {SmallImage} from './index'
import {ImageContext} from './ImageContext'

const Carousel = () => {

    const {state, dispatch} = useContext(ImageContext)
    const [selectedImages, setSelectedImages] = useState([])

    const handleRemove = () => {
        dispatch({type: 'REMOVE_FROM_CAROUSEL', payload : selectedImages})
        console.log('added', selectedImages, state)
    }


    const handleClick = (e) => {
        e.preventDefault()
        // setSelected(!selected)
        let eventName = `${e.target.name}`
        let cur = state.selector.filter(((val, i) => (i+1).toString() === eventName))
        if(!selectedImages.includes(eventName)) setSelectedImages(prev => [...prev, ...cur])
        
        else setSelectedImages(prev => prev.filter((val , id) => (id+ 1 ).toString() === eventName))
        
        console.log(state)
    }


    return (
        <div className='carousel-container'>
            {state.carousel.map((img, id) => <div><SmallImage img={img} handleClick={handleClick} id={id+1} selectedImages={selectedImages} /></div>)}
            { selectedImages.length ?   <button className='btn' onClick={handleRemove}>Remove</button> : <button className='btn' disabled>Remove</button>}
        </div>
    )
}

export default Carousel;