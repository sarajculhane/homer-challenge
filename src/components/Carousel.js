import React, {useContext, useState} from 'react'
import {SmallImage} from './index'
import {ImageContext} from './ImageContext'

const Carousel = () => {

    const {state, dispatch} = useContext(ImageContext)
    const [selectedImages, setSelectedImages] = useState([])



    const handleClick = (e) => {
        e.preventDefault()
        // setSelected(!selected)
        let eventName = `${e.target.name}`
        if(!selectedImages.includes(eventName)) setSelectedImages(prev => [...prev, eventName])
        
        else setSelectedImages(prev => prev.filter((id) => id === eventName))
        
        console.log(state)
    }


    return (
        <div className='carousel-container'>
            {state.carousel.map((img, id) => <div><SmallImage img={img} handleClick={handleClick} id={id+1} selectedImages={selectedImages} /></div>)}
        </div>
    )
}

export default Carousel;