import React ,{useState, useEffect} from 'react'
const SmallImage = (props) => {
    const {img, handleClick, id, selectedImages, selected} = props
    const [select, setSelect] = useState([])

    // adds/removes image to the select array if image is selected
    // if selected, the selected class will be applied

    const imageClick = () => {
        if(!select.includes(id)) setSelect(prev => [...prev, id])
        else setSelect(select.filter((imgId) => imgId !== id))
    }

    // this resets the selected images when the 'selected' prop changes (which is once the selected items have been added)

    useEffect(() => {
        setSelect([])
    }, [selected])


    return (
        <div onClick={handleClick} >
            <div onClick={imageClick}><img src={`/images/${img.imageName}`} className={`small ${ select.includes(id) ? 'selected' : ''}`} name={id} /></div>
            <div>{img.imageCaption}</div>
        </div>
    )
}

export default SmallImage;