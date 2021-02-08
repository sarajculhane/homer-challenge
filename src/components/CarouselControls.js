import React from 'react'

const CarouselControls = (props) => {
    const {back, len, size, forward, goBack, goForward} = props
    return (            
        <div className='arrows'> 
            {back === 0  ?  <button className='btn-sm' disabled> {'<'}</button>: <button onClick={goBack} className='btn-sm' > {'<'}</button> }
            { forward > len-1 || len < size + 1? <button disabled className='btn-sm' > {'>'}</button>: <button onClick={goForward} className='btn-sm' >{'>'}</button>} 
        </div>

    )
}

export default CarouselControls