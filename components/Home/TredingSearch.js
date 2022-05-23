import React from 'react'
import {BiRefresh} from 'react-icons/bi'
import Styles from './Tredingsearch.module.css'
const TredingSearch = () => {
  return (
    <section className={`${Styles.tredingsearch} py-5`}>
    <div className="container">
        <div className="section-head d-flex" >
            <h6 className="me-auto">Treding Search</h6>
            <a href="top.html"> <BiRefresh/>Changel</a>
        </div>
        <div className="row">
            <div className={`${Styles.treadingsection} d-flex`}>
                <div className={Styles.first}>
                    <a href="#">
                        <div className={`${Styles.text} d-flex`} >
                            <div className= {Styles.mytext} >
                                <h6>Brand</h6>
                            <p>10k products</p>
                            </div>
                            <div className={Styles.img}>
                                <img src="/image/treading/makup.jpg" alt=""/>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={Styles.first}>
                    <a href="#">
                        <div className={`${Styles.text} d-flex`} >
                            <div className= {Styles.mytext} >
                                <h6>Screen</h6>
                                <p>15k products</p>
                            </div>
                            <div className={Styles.img}>
                                <img src="/image/treading/sceen.jpg" alt=""/>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={Styles.first}>
                    <a href="#">
                        <div className={`${Styles.text} d-flex`} >
                            <div className= {Styles.mytext} >
                                <h6>Brand</h6>
                            <p>10k products</p>
                            </div>
                            <div className={Styles.img}>
                                <img src="/image/treading/brand.jpg" alt=""/>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={Styles.first}>
                    <a href="#">
                        <div className={`${Styles.text} d-flex`} >
                            <div className= {Styles.mytext} >
                                <h6>Screen</h6>
                                <p>15k products</p>
                            </div>
                            <div className={Styles.img}>
                                <img src="/image/treading/hair.jpg" alt=""/>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <div className="first">
                    <a href="mask.html">
                        <div className="text d-flex" >
                            <div className="my-text">
                                <h6>Sceen</h6>
                            <p>15k products</p>
                            </div>
                            <div className="img">
                                <img src="/image/treading/sceen.jpg/" alt=""/>
                            </div>
                        </div>
                    </a>
                </div> */}
     
           
               
            </div>
        </div>
    </div>
</section>
  )
}

export default TredingSearch