import React from 'react'
import Styles from './Topproduct.module.css'
const TopProduct = () => {
  return (
    <div className={`${Styles.TopProduct} col-md-2 col-sm-4`}>
    <a href="#">
        <img src="/image/top/1.jpg" alt=""/>
        <div className={Styles.bgarea}>
            <p>Monthly Sales 1k</p>
        </div>
        <h4>Skinfood Sheabutter Perfumed Hand Cream</h4>
    </a>
    </div>
  )
}

export default TopProduct