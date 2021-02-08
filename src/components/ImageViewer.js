import React from 'react'

const ImageViewer = (props) => {
    const {image, toggleImage} = props

    return (
        <div className='img-viewer'>
            <div><img src={`/images/${image.imageName}`} className='large' /></div>
            <div>{image.imageCaption}</div>
            <button className='btn' onClick={toggleImage}>Close</button>
        </div>
    )
}

export default ImageViewer;