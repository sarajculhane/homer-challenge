import React, {useContext, useState, useEffect} from 'react'
import {SmallImage, CarouselImages} from './index'
import {ImageContext} from './ImageContext'

const Carousel = () => {

    const {state, dispatch} = useContext(ImageContext)
    const [selectedImages, setSelectedImages] = useState([])
    const [removed, setRemoved] = useState(false)

    state.carousel.sort((a, b) => a.imageCaption.toLowerCase().trim() > b.imageCaption.toLowerCase().trim() ? 1 : -1)

    const handleRemove = () => {
        setRemoved(!removed)
        
        console.log('added', selectedImages, state)
    }


    useEffect(() => {
        dispatch({type: 'REMOVE_FROM_CAROUSEL', payload : selectedImages})
        dispatch({type: 'ADD_TO_VIEWER' , payload : selectedImages})
        setSelectedImages([])

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
            <div className='size-options'>
                    <select>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

            {state.carousel.map((img, id) => <div><SmallImage img={img} handleClick={handleClick} id={id+1} selectedImages={selectedImages} /></div>)}
           <div className='btn-cont'> { selectedImages.length ?   <button className='btn' onClick={handleRemove}>Remove</button> : <button className='btn' disabled>Remove</button>} </div>
        </div>
    )
}

export default Carousel;