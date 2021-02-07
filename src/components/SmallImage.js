import React ,{useState, useEffect} from 'react'
const SmallImage = (props) => {
    const {img, handleClick, id, selectedImages, selected} = props
    const [select, setSelect] = useState([])

    const testClick = () => {
        if(!select.includes(id)) setSelect(prev => [...prev, id])
        else setSelect(select.filter((imgId) => imgId !== id))
    }

    useEffect(() => {
        setSelect([])
    }, [selected])
    return (
        <div onClick={handleClick} >
            <div onClick={testClick}><img src={`/images/${img.imageName}`} className={`small ${ select.includes(id) ? 'selected' : ''}`} name={id} /></div>
            <div>{img.imageCaption}</div>
        </div>
    )
}

export default SmallImage;