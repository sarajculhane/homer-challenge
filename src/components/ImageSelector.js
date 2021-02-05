import React, {useState} from 'react'
import {SmallImage} from './index'

const ImageSelector = (props) => {

    // get data from props and sort alphabetically
    let data = props.data.carouselImages
    data.sort((a, b) => a.imageCaption.toLowerCase().trim() > b.imageCaption.toLowerCase().trim() ? 1 : -1)

    const [selectedImages, setSelectedImages] = useState([])
    const [selected, setSelected] = useState(false)

    const handleClick = (e) => {
        // setValue({value: e.target.value})
        e.preventDefault()
        setSelected(!selected)
        let eventName = `${e.target.name}`
        if(!selectedImages.includes(eventName)) setSelectedImages(prev => [...prev, eventName])
        else setSelectedImages(prev => prev.filter((id) => id === eventName))

        console.log(event.target, e.target.name, selectedImages)
    }

    const handleAdd = () => {
        console.log('added', selectedImages)
    }

    return (
        <div className='img-container'>
                {data.map((img, id) => <div><SmallImage img={img} handleClick={handleClick} id={id+1} selectedImages={selectedImages} /></div>)}
             { selectedImages.length ?   <button className='btn' onClick={handleAdd}>Add</button> : <button className='btn' disabled>Add</button>}
        </div>
    )
}

export default ImageSelector;                         