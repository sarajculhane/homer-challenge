import React, {useState, useEffect} from 'react'


const CarouselImages = (props) => {

    const {img, handleClick, id, selectedImages, removed, mode} = props
    const [select, setSelect] = useState([])

    const testClick = () => {
        if(!select.includes(id)) setSelect(prev => [...prev, id])
        else setSelect(select.filter((imgId) => imgId !== id))
    }

    const toggleMode = () => {
        setMode(!mode)
    }

    useEffect(() => {
        setSelect([])
    }, [removed])

    return (
        <div className='carousel-container'>
    { !mode  ?  <div>
        <div>
            <img src={`/images/${img.imageName}`} className={`small`} name={id} /></div>

            <div>{img.imageCaption}</div>
    </div> : <div> {img ? 
         <div onClick={handleClick} >
            <div onClick={testClick}><img src={`/images/${img.imageName}`} className={`small ${ select.includes(id) ? 'selected' : ''}`} name={id} /></div>

                <div>{img.imageCaption}</div>
            </div>
            
            : <div></div>
        }</div>

        }


        </div>
    )
}

export default CarouselImages;