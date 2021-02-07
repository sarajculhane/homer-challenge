import React, {useContext, useState, useEffect} from 'react'
import {SmallImage, CarouselImages} from './index'
import {ImageContext} from './ImageContext'

const Carousel = () => {

    const {state, dispatch} = useContext(ImageContext)
    const [selectedImages, setSelectedImages] = useState([])
    const [removed, setRemoved] = useState(false)
    const [back, setBack] = useState(0)
    
    const [changed, setChanged] = useState(false)
    const [size, setSize] = useState(2)
    const [forward, setForward] = useState(2)
    const [mode, setMode] = useState(false)

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
    }

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

    const sizeSelection = (e) => {
        // console.log(e.target.value)
        setForward(Number(e.target.value))
        setSize(Number(e.target.value))
        
    }

    const changeMode = () => {
        setMode(!mode)
    }


    return (
        <div className='carousel-container'>
            {mode ? <button onClick= {changeMode}>View Only</button> : <button onClick= {changeMode}>Edit </button> }
            <div className='size-options'>
                    <select onChange={sizeSelection}>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
                {back === 0  ?  <button disabled> {'<'}</button>: <button onClick={goBack}> {'<'}</button> }
                {console.log(size)}
            {state.carousel.slice(back, forward).map((img, id) => <div><CarouselImages img={img} handleClick={handleClick} id={id+1} mode={mode} removed={removed} selectedImages={selectedImages} /></div>)}
            { forward > state.carousel.length-1 || state.carousel.length < size + 1? <button disabled> {'>'}</button>: <button onClick={goForward} >{'>'}</button>} 


          <div>  {mode ? 
           <div className='btn-cont'> { selectedImages.length ?   <button className='btn' onClick={handleRemove}>Remove</button> : <button className='btn' disabled>Remove</button>} </div>
           
        : <div></div>

            }</div>
            </div>
    )
}

export default Carousel;