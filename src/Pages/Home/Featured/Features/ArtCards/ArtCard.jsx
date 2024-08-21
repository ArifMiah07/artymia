
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';


import img1 from '../../../../../assets/images/card-img/1.jpg'
import img2 from '../../../../../assets/images/card-img/2.jpg'
import img3 from '../../../../../assets/images/card-img/3.jpg'
import img4 from '../../../../../assets/images/card-img/4.jpg'
import img5 from '../../../../../assets/images/card-img/5.jpg'
import img6 from '../../../../../assets/images/card-img/6.jpg'
import img7 from '../../../../../assets/images/card-img/7.jpg'
import img8 from '../../../../../assets/images/card-img/8.jpg'
import img9 from '../../../../../assets/images/card-img/9.jpg'
import img10 from '../../../../../assets/images/card-img/10.jpg'
import img11 from '../../../../../assets/images/card-img/11.jpg'
import img12 from '../../../../../assets/images/card-img/12.jpg'

const ArtCard = () => {
    return (
        <>
            <div className='p-24'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper p-0"
                >
                    <SwiperSlide>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img5} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img6} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img7} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img8} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img9} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img10} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img11} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img12} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default ArtCard;