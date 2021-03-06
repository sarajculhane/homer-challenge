import React, {useContext, useState, useEffect} from 'react'
import {SmallImage, CarouselImages, ImageSizeSelector, CarouselControls} from './index'
import {ImageContext} from './ImageContext'

const Carousel = () => {

    const {state, dispatch} = useContext(ImageContext)
    const [selectedImages, setSelectedImages] = useState([])
    const [removed, setRemoved] = useState(false)
    const [back, setBack] = useState(0)
    
    const [size, setSize] = useState(2)
    const [forward, setForward] = useState(2)
    const [mode, setMode] = useState(false)

    // sort alphabetically

    state.carousel.sort((a, b) => a.imageCaption.toLowerCase().trim() > b.imageCaption.toLowerCase().trim() ? 1 : -1)


    const handleRemove = () => {
        setRemoved(!removed)
    }


    /* dispatch remove from carousel and add to viewer to update ImageContext when state of removed changes
        also resets selectedImages so that there are no active selections
    */


    useEffect(() => {
        dispatch({type: 'REMOVE_FROM_CAROUSEL', payload : selectedImages})
        dispatch({type: 'ADD_TO_VIEWER' , payload : selectedImages})
        setSelectedImages([])

    }, [removed])


    // same as ImageSelector click handler except done for the Carousel
    const handleClick = (e) => {
        e.preventDefault()
        let eventName = `${e.target.name}`
        let cur = state.carousel.filter(((val, i) => (i+1).toString() === eventName))

        if(!selectedImages.map((val ) => val.id).includes(cur[0].id)) {
            setSelectedImages(prev => [...prev, ...cur])

        } else {
            setSelectedImages(prev => prev.filter((img) => img.id !== cur[0].id))
        }
    }

    // Applied to the back/forward buttons on click, takes user to the previous/next set of images based on the current size 

    const goBack = () => {
        if(back > 0) {
            setBack(back - size)
            setForward(forward  - size)
        }
    }

    const goForward = () => {
        if(forward < state.carousel.length + 1)  {
            setForward(forward + size)
            setBack(back + size)
        }
    }

    // Change the idx of forward and the size of the images to display after the user makes a selection

    const sizeSelection = (e) => {
        setForward(Number(e.target.value))
        setSize(Number(e.target.value))
        
    }

    // toggles between edit/view mode

    const changeMode = () => {
        setMode(!mode)
    }


    return (
        <div className='carousel-container'>
            <h3 className='select-header'>Carousel Editor</h3>
            <div className='carousel-modes'>
            {mode ? <button onClick= {changeMode} className='btn' >View Only</button> : <button onClick= {changeMode} className='btn' >Edit </button> }

                <ImageSizeSelector sizeSelection={sizeSelection} />
            <div>
                <div className='main-carousel'>{state.carousel.map((img, id) => <div><CarouselImages size={size} img={img} handleClick={handleClick} id={id+1} mode={mode} removed={removed} selectedImages={selectedImages} /></div>).slice(back, forward)}</div>

                <CarouselControls back={back} forward={forward} len={state.carousel.length} size={size} goBack={goBack} goForward={goForward} />

            
            </div>
            

          <div>  {mode ? 
           <div className='btn-cont'> { selectedImages.length ?   <button className='btn' onClick={handleRemove}>Remove</button> : <button className='btn' disabled>Remove</button>} </div>
           
        : <div></div>

            }</div>
            </div>
            </div>
    )
}

export default Carousel;