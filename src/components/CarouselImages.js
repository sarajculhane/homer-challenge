import React, {useState} from 'react'
import data from '../carouselImages.json'

const CarouselImages = () => {
    const images = data.carouselImages
    const [back, setBack] = useState(0)
    const [forward, setForward] = useState(2)

    const goBack = () => {
        if(back > 0) {
            setBack(back - 1)
            setForward(forward  - 1)
        }
    }

    const goForward = () => {
        if(forward < images.length)  {
            setForward(forward + 1)
            setBack(back + 1)
        }
    }

    return (
        <div className='carousel-container'>
         {back === 0  ?  <button disabled> {'<'}</button>: <button onClick={goBack}> {'<'}</button> }
           {images.map((img) => <div>{img.imageCaption}</div>).slice(back, forward)}
         { forward === images.length-1 ? <button disabled> {'>'}</button>: <button onClick={goForward} >{'>'}</button>} 


        </div>
    )
}

export default CarouselImages;