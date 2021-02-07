import React, {useState, useEffect} from 'react'


const CarouselImages = (props) => {

    const {img, handleClick, id, selectedImages, removed} = props
    const [select, setSelect] = useState([])

    console.log(img)


    const testClick = () => {
        if(!select.includes(id)) setSelect(prev => [...prev, id])
        else setSelect(select.filter((imgId) => imgId !== id))
    }

    useEffect(() => {
        setSelect([])
    }, [removed])

    return (
        <div className='carousel-container'>
        {img ? 
         <div onClick={handleClick} >
            <div onClick={testClick}><img src={`/images/${img.imageName}`} className={`small ${ select.includes(id) ? 'selected' : ''}`} name={id} /></div>

                <div>{img.imageCaption}</div>
            </div>
            : <div></div>
        }


        </div>
    )
}

export default CarouselImages;