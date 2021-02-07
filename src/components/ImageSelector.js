import React, {useState, useContext, useEffect} from 'react'
import {SmallImage} from './index'
import {ImageContext} from './ImageContext'


const ImageSelector = () => {

    // get data from props and sort alphabetically
    const {state, dispatch} = useContext(ImageContext)
    

    state.selector.sort((a, b) => a.imageCaption.toLowerCase().trim() > b.imageCaption.toLowerCase().trim() ? 1 : -1)

    const [selectedImages, setSelectedImages] = useState([])
    const [selected, setSelected] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        let eventName = `${e.target.name}`
        let cur = state.selector.filter(((val, i) => (i+1).toString() === eventName))

        if(!selectedImages.map((val ) => val.id).includes(cur[0].id)) {
            setSelectedImages(prev => [...prev, ...cur])

        } else {
            setSelectedImages(prev => prev.filter((img) => img.id !== cur[0].id))
        }

        // console.log(selectedImages, cur)

    }

    useEffect(() => {
        
        dispatch({type: 'REMOVE_FROM_VIEWER', payload : selectedImages})
        dispatch({type: 'ADD_TO_CAROUSEL', payload : selectedImages})
        setSelectedImages([])

    }, [selected])

    const handleAdd = () => {
        
        setSelected(!selected)
        
        
    }

    

    return (
        <div className='img-container'>
                {state.selector.map((img, id) => <div><SmallImage img={img} handleClick={handleClick} id={id+1} selectedImages={selectedImages} selected={selected}/></div>)}
             { selectedImages.length ?   <button className='btn' onClick={handleAdd}>Add</button> : <button className='btn' disabled>Add</button>}
        </div>
    )
}

export default ImageSelector;                         