import React, {useState, useContext, useEffect} from 'react'
import {SmallImage} from './index'
import {ImageContext} from './ImageContext'


const ImageSelector = () => {

    // get data from props and sort alphabetically
    const {state, dispatch} = useContext(ImageContext)
    

    state.selector.sort((a, b) => a.imageCaption.toLowerCase().trim() > b.imageCaption.toLowerCase().trim() ? 1 : -1)

    const [selectedImages, setSelectedImages] = useState([])
    const [selected, setSelected] = useState(0)

    /* The click handler gets the e.target.name and find the match with the correct id
    then, it adds the item to the selectedImages array if it was not in it or removes it if it 
    already was
    */
    

    const handleClick = (e) => {
        e.preventDefault()
        let eventName = `${e.target.name}`
        let cur = state.selector.filter(((val, i) => (i+1).toString() === eventName))

        if(!selectedImages.map((val ) => val.id).includes(cur[0].id)) {
            setSelectedImages(prev => [...prev, ...cur])

        } else {
            setSelectedImages(prev => prev.filter((img) => img.id !== cur[0].id))
        }

    }


    /* dispatch remove from viewer and add to carousel to update ImageContext when state of selected changes
        also resets selectedImages so that there are no active selections
    */

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
           <h3 className='select-header'>Available Images</h3>
           <div className='img-items'>
                {state.selector.map((img, id) => <div><SmallImage img={img} handleClick={handleClick} id={id+1} selectedImages={selectedImages} selected={selected}/></div>)}
            </div>
           <div className='btn-cont'>  { selectedImages.length ?   <button className='btn' onClick={handleAdd}>Add</button> : <button className='btn' disabled>Add</button>} </div>
        </div>
    )
}

export default ImageSelector;                         