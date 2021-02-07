import React from 'react'

const ImageViewer = (props) => {
    const {image} = props

    return (
        <div className='img-viewer'>
            <div><img src={`/images/${image.imageName}`} className='large' /></div>
            <div>{image.imageCaption}</div>
        </div>
    )
}

export default ImageViewer;