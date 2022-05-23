import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from './FlashItem.module.css'
import {  Pagination, Navigation } from "swiper";
import ProgressBar from 'react-bootstrap/ProgressBar'
const FlashDeals = () => {
  return (
    <>
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      slidesPerGroup={5}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
 
      <SwiperSlide>
        <div className="itemBox">
            <div className={Styles.imageBox}>
                <img src="/image/flash/f2.jpg" alt="" />
                <div className={Styles.toppercent}>
                    <div className={Styles.topbg}>
                        <div className={Styles.flexItem}>
                            <div className={Styles.percent}>50%</div>
                            <div className={Styles.off}>OFF</div>
                        </div>
                        
                    </div>
                </div>
                <div className={Styles.flashbg}>
                    <img src="/image/flash1.png" alt="" />
                </div>
            </div>
            
            <div className={Styles.bottomBox}>
                <div className={`${Styles.pricebox}`}>
                    <h3>88 <span >$</span></h3>
                 </div>
                <div>
                <ProgressBar  variant='progresscolor'  label={`${30} Sold`} now={30} />
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="itemBox">
            <div className={Styles.imageBox}>
                <img src="/image/flash/f3.jpg" alt="" />
                <div className={Styles.toppercent}>
                    <div className={Styles.topbg}>
                        <div className={Styles.flexItem}>
                            <div className={Styles.percent}>60%</div>
                            <div className={Styles.off}>OFF</div>
                        </div>
                        
                    </div>
                </div>
                <div className={Styles.flashbg}>
                    <img src="/image/flash2.png" alt="" />
                </div>
            </div>
            
            <div className={Styles.bottomBox}>
                <div className={`${Styles.pricebox}`}>
                    <h3>100 <span >$</span></h3>
                 </div>
                <div>
                <ProgressBar  variant='progresscolor'  label={`${30} Sold`} now={30} />
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="itemBox">
            <div className={Styles.imageBox}>
                <img src="/image/flash/f4.jpg" alt="" />
                <div className={Styles.toppercent}>
                    <div className={Styles.topbg}>
                        <div className={Styles.flexItem}>
                            <div className={Styles.percent}>40%</div>
                            <div className={Styles.off}>OFF</div>
                        </div>
                        
                    </div>
                </div>
                <div className={Styles.flashbg}>
                    <img src="/image/flash1.png" alt="" />
                </div>
            </div>
            
            <div className={Styles.bottomBox}>
                <div className={`${Styles.pricebox}`}>
                    <h3>40 <span >$</span></h3>
                 </div>
                <div>
                <ProgressBar  variant='progresscolor'  label={`${10} Sold`} now={25} />
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="itemBox">
            <div className={Styles.imageBox}>
                <img src="/image/flash/f5.jpg" alt="" />
                <div className={Styles.toppercent}>
                    <div className={Styles.topbg}>
                        <div className={Styles.flexItem}>
                            <div className={Styles.percent}>80%</div>
                            <div className={Styles.off}>OFF</div>
                        </div>
                        
                    </div>
                </div>
                <div className={Styles.flashbg}>
                    <img src="/image/flash1.png" alt="" />
                </div>
            </div>
            
            <div className={Styles.bottomBox}>
                <div className={`${Styles.pricebox}`}>
                    <h3>120 <span >$</span></h3>
                 </div>
                <div>
                <ProgressBar  variant='progresscolor'  label={`${80} Sold`} now={80} />
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="itemBox">
            <div className={Styles.imageBox}>
                <img src="/image/flash/f8.jpg" alt="" />
                <div className={Styles.toppercent}>
                    <div className={Styles.topbg}>
                        <div className={Styles.flexItem}>
                            <div className={Styles.percent}>50%</div>
                            <div className={Styles.off}>OFF</div>
                        </div>
                        
                    </div>
                </div>
                <div className={Styles.flashbg}>
                    <img src="/image/flash2.png" alt="" />
                </div>
            </div>
            
            <div className={Styles.bottomBox}>
                <div className={`${Styles.pricebox}`}>
                    <h3>200 <span >$</span></h3>
                 </div>
                <div>
                <ProgressBar  variant='progresscolor'  label={`${80} Sold`} now={95} />
                </div>
            </div>
        </div>
      </SwiperSlide>
 
      
    </Swiper>
  </>
  )
}

export default FlashDeals
 