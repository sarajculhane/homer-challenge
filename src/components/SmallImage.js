import React from 'react'
const SmallImage = (props) => {
    const {img} = props
    return (
        <div>
            <div><img src={`/images/${img.imageName}`} className='small' /></div>
            <div>{img.imageCaption}</div>
        </div>
    )
}

export default SmallImage;