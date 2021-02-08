import React from 'react'

const ImageSizeSelector = (props) => {
    const {sizeSelection} = props
    return (
        <div className='size-options'>
        <select onChange={sizeSelection}>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
    </div>
            
    )
    
}

export default ImageSizeSelector;