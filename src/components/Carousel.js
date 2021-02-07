import React, {useContext, useState, useEffect} from 'react'
import {SmallImage} from './index'
import {ImageContext} from './ImageContext'

const Carousel = () => {

    const {state, dispatch} = useContext(ImageContext)
    const [selectedImages, setSelectedImages] = useState([])
    const [removed, setRemoved] = useState(false)

    const handleRemove = () => {
        setRemoved(!removed)
        
        console.log('added', selectedImages, state)
    }


    useEffect(() => {
        dispatch({type: 'REMOVE_FROM_CAROUSEL', payload : selectedImages})
        dispatch({type: 'ADD_TO_VIEWER' , payload : selectedImages})

        return () => {
            setSelectedImages([])
        }
    }, [removed])

    const handleClick = (e) => {
        e.preventDefault()
        let eventName = `${e.target.name}`
        let cur = state.carousel.filter(((val, i) => (i+1).toString() === eventName))

        if(!selectedImages.map((val ) => val.id).includes(cur[0].id)) {
            setSelectedImages(prev => [...prev, ...cur])

        } else {
            setSelectedImages(prev => prev.filter((img) => img.id !== cur[0].id))
        }

        // console.log(selectedImages, cur)
    }


    return (
        <div className='carousel-container'>
            {state.carousel.map((img, id) => <div><SmallImage img={img} handleClick={handleClick} id={id+1} selectedImages={selectedImages} /></div>)}
            { selectedImages.length ?   <button className='btn' onClick={handleRemove}>Remove</button> : <button className='btn' disabled>Remove</button>}
        </div>
    )
}

export default Carousel;