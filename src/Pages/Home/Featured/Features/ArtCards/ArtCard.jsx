import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import img1 from '../../../../../assets/images/card-img/1.jpg';
import img2 from '../../../../../assets/images/card-img/2.jpg';
import img3 from '../../../../../assets/images/card-img/3.jpg';
// ... other image imports
import HeaderCard from '../../../../../Components/Cards/HeaderCard/HeaderCard';
import MiniHeaderCard from '../../../../../Components/Cards/MiniHeaderCard/MiniHeaderCard';

const ArtCard = () => {
    return (
        <div className='mb-24 mx-auto my-12 drop-shadow-2xl xs:[320px] sm:[450px] md:[724px] lg:w-[1024px] xl:[1280px]  border-2 border-r-emerald-400 '>
            {/* header section */}
            <header>
                <HeaderCard headingText={"Edited Art Collection"}></HeaderCard>
            </header>
            {/* main section */}
            <main className='px-10'>
                {/* section 1 */}
                <section className='border border-gray-700'>
                <MiniHeaderCard headerText={"Anime"}></MiniHeaderCard>
                    <div className='p-8 border-y-4 border-gray-200'>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            // Setting explicit width and height
                            style={{
                                width: '400px',  // You can customize this value
                                height: '500px', // Custom height
                            }}
                        >
                            <SwiperSlide>
                                <img src={img1} alt="" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} alt="" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} alt="" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            {/* Add more SwiperSlide components as needed */}
                        </Swiper>
                    </div>
                </section>

                {/* section 2 */}
                <section className='border border-gray-700 my-12'>
                <MiniHeaderCard headerText={"Anime"}></MiniHeaderCard>
                    <div className='p-8 border-y-4 border-gray-200'>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            // Setting explicit width and height
                            style={{
                                width: '400px',
                                height: '500px',
                            }}
                        >
                            <SwiperSlide>
                                <img src={img1} alt="" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} alt="" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} alt="" className="w-full h-full object-cover" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ArtCard;
