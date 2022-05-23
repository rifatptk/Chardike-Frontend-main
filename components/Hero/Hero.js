import React from 'react'
import Hotmenu from '../hotmenu/Hotmenu'
import Styles from './Hero.module.css'
import Slider from './Slider/Slider'
const Hero = () => {
  return (
    <section className={Styles.hero}>
    <div className="container">
        <div className="row">
            <Slider/>
        </div>
        <div className="row">
            <div className="icon-area d-flex my-4">
                <Hotmenu/>
                <Hotmenu/>
                <Hotmenu/>
                <Hotmenu/>
                <Hotmenu/>
                <Hotmenu/>
                <Hotmenu/>
                <Hotmenu/>
                <Hotmenu/>
                <Hotmenu/>
                <Hotmenu/>
              
             </div>
        </div>
    </div>
</section>

  )
}

export default Hero