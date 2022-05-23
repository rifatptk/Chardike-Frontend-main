import React from 'react'
import LeftSlider from './LeftSlider'
import Rightslider from './Rightslider'

const Slider = () => {
  return (
    <div className="slider">
      <div className="row">
        <div className="col-md-8">
          <LeftSlider/>
        </div>
        <div className="col-md-4">
          <Rightslider/>
        </div>
      </div>
    </div>
  )
}

export default Slider