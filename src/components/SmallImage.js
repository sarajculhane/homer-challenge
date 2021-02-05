import React ,{useState} from 'react'
const SmallImage = (props) => {
    const {img, handleClick, id, selected, selectedImages} = props
    console.log(selectedImages)
    const [select, setSelect] = useState([])

    const testClick = () => {
        if(!select.includes(id)) setSelect(prev => [...prev, id])
        else setSelect(select.filter((imgId) => imgId !== id))
    }
    console.log(selectedImages.filter((image) => image.eventName === id))
    return (
        <div onClick={handleClick} >
            <div onClick={testClick}><img src={`/images/${img.imageName}`} className={`small ${ select.includes(id) ? 'selected' : ''}`} name={id} /></div>
            <div>{img.imageCaption}</div>
        </div>
    )
}

export default SmallImage;