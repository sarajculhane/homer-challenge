import React, {useState, useContext} from 'react'
import {SmallImage} from './index'
import {ImageContext} from './ImageContext'


const ImageSelector = () => {

    // get data from props and sort alphabetically
    const {state, dispatch} = useContext(ImageContext)
    

    // state.sort((a, b) => a.imageCaption.toLowerCase().trim() > b.imageCaption.toLowerCase().trim() ? 1 : -1)

    const [selectedImages, setSelectedImages] = useState([])
    // const [selected, setSelected] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        // setSelected(!selected)
        let eventName = `${e.target.name}`
        if(!selectedImages.includes(eventName)) setSelectedImages(prev => [...prev, eventName])
        
        else setSelectedImages(prev => prev.filter((id) => id === eventName))
        
        console.log(state)
    }

    const handleAdd = () => {
        dispatch({type: 'ADD_TO_CAROUSEL', payload : selectedImages})
        console.log('added', selectedImages, state)
    }

    return (
        <div className='img-container'>
                {state.selector.map((img, id) => <div><SmallImage img={img} handleClick={handleClick} id={id+1} selectedImages={selectedImages} /></div>)}
             { selectedImages.length ?   <button className='btn' onClick={handleAdd}>Add</button> : <button className='btn' disabled>Add</button>}
        </div>
    )
}

export default ImageSelector;                         