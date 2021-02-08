import React, {useState, useEffect} from 'react'
import ImageViewer from './ImageViewer'

const CarouselImages = (props) => {

    const {img, handleClick, id, selectedImages, removed, mode, size, back, forward, carousel} = props
    const [select, setSelect] = useState([])
    const [caption, setShowCaption] = useState(false)
    const [viewImage, setViewImage] = useState(false)

    const imageClick = () => {
        if(!select.includes(id)) setSelect(prev => [...prev, id])
        else setSelect(select.filter((imgId) => imgId !== id))
    }

    // Toggles for imageViewer, the mode and showing the captions within edit more

    const toggleImage = () => {
        setViewImage(!viewImage)
    }

    const toggleMode = () => {
        setMode(!mode)
    }

    const showCaption = (e) => {
        e.preventDefault()
        setShowCaption(!caption)
    }

    // Get the correct class name for size of an image based on selected value

    const dimension = () => {
        if(size === 5) return 'small'
        if(size === 4) return 'med'
        if(size === 3) return 'med-lg'
        if(size === 2) return 'lg'

    }


    const newSize = dimension()


    useEffect(() => {
        setSelect([])
    }, [removed])

    return (
        <div >
        <div >
    { !mode  ?  <div className='view-mode'>
        <div onClick={toggleImage}>
         {!viewImage ?  <img src={`/images/${img.imageName}`} className={newSize} name={id}/> : <div></div> }</div>
            
    </div> : <div> {  img ? 
         <div className='edit-mode' onClick={handleClick} >
            <div onClick={imageClick}><img onMouseOver={showCaption} onMouseOut={showCaption} src={`/images/${img.imageName}`} className={`${newSize} ${ select.includes(id) ? 'selected' : ''}`} name={id} /></div>

                { caption ? <div>{img.imageCaption}</div> : <div ></div>}
            </div>
            
            : <div></div>
        }</div>

        }


        </div>

            <div className='viewer'> 
                {viewImage ? <ImageViewer image={img} onClick={toggleImage} toggleImage={toggleImage} /> : <div></div>}
            </div>
        </div>
    )
}

export default CarouselImages;