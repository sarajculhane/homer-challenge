import React, {useState, useEffect} from 'react'
import ImageViewer from './ImageViewer'

const CarouselImages = (props) => {

    const {img, handleClick, id, selectedImages, removed, mode, size} = props
    const [select, setSelect] = useState([])
    const [caption, setShowCaption] = useState(false)
    const [viewImage, setViewImage] = useState(false)

    const testClick = () => {
        if(!select.includes(id)) setSelect(prev => [...prev, id])
        else setSelect(select.filter((imgId) => imgId !== id))
    }

    const toggleImage = () => {
        setViewImage(!viewImage)
        console.log('cliked')
    }

    const toggleMode = () => {
        setMode(!mode)
    }

    const showCaption = () => {
        setShowCaption(!caption)
    }

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
            {console.log(newSize)}
    { !mode  ?  <div className='view-mode'>
        <div onClick={toggleImage}>
            <img src={`/images/${img.imageName}`} className={newSize} name={id}  /></div>
            
    </div> : <div> {img ? 
         <div className='edit-mode' onClick={handleClick} >
            <div onClick={testClick}><img onMouseOver={showCaption} onMouseOut={showCaption} src={`/images/${img.imageName}`} className={`${newSize} ${ select.includes(id) ? 'selected' : ''}`} name={id} /></div>

                { caption ? <div>{img.imageCaption}</div> : <div ></div>}
            </div>
            
            : <div></div>
        }</div>

        }


        </div>

            <div className='viewer'> 
                {viewImage ? <ImageViewer image={img} onClick={toggleImage} /> : <div></div>}
            </div>
        </div>
    )
}

export default CarouselImages;