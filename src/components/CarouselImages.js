import React, {useState, useEffect} from 'react'


const CarouselImages = (props) => {

    const {img, handleClick, id, selectedImages, removed, mode} = props
    const [select, setSelect] = useState([])
    const [caption, setShowCaption] = useState(false)

    const testClick = () => {
        if(!select.includes(id)) setSelect(prev => [...prev, id])
        else setSelect(select.filter((imgId) => imgId !== id))
    }

    const toggleMode = () => {
        setMode(!mode)
    }

    const showCaption = () => {
        setShowCaption(!caption)
    }


    useEffect(() => {
        setSelect([])
    }, [removed])

    return (
        <div className='carousel-container'>
    { !mode  ?  <div className='view-mode'>
        <div>
            <img src={`/images/${img.imageName}`} className={`small`} name={id} /></div>
    </div> : <div> {img ? 
         <div className='edit-mode' onClick={handleClick} >
            <div onClick={testClick}><img onMouseOver={showCaption} onMouseOut={showCaption} src={`/images/${img.imageName}`} className={`small ${ select.includes(id) ? 'selected' : ''}`} name={id} /></div>

                { caption ? <div>{img.imageCaption}</div> : <div ></div>}
            </div>
            
            : <div></div>
        }</div>

        }


        </div>
    )
}

export default CarouselImages;