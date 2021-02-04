import React from 'react'
import {SmallImage} from './index'

const ImageSelector = (props) => {
    let data = props.data.carouselImages
    data.sort((a, b) => a.imageCaption.toLowerCase().trim() > b.imageCaption.toLowerCase().trim() ? 1 : -1)
    console.log(data)
    return (
        <div className='img-container'>
                {data.map((img) => <div><SmallImage img={img} /></div>)}
        </div>
    )
}

export default ImageSelector;                              