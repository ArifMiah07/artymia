import { TypeAnimation } from 'react-type-animation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import MiniHeaderCard from '../../../../../../Components/Cards/MiniHeaderCard/MiniHeaderCard';

const MinimalismPointillism = () => {
    return (
        <div>
            <div>
                <MiniHeaderCard  bg_clr={'bg-soft-lilac-glow'} headerText={'Minimalism X Pointillism Art'}></MiniHeaderCard>
                <div>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='relative group'>
                            <div className="absolute inset-0 flex flex-col p-12 justify-center items-center z-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <div className='flex flex-col justify-between  opacity-60 w-full h-full'>
                                    <p className=" p-12 mb-8 font-montserrat bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                        <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed once, initially
                                                    'Minimalism, Pointillism Art: subject:  Alien penguin, background: [forest, hills, mountains, trees, floews], dark, 8k,',
                                                    1000,
                                                    'Minimalism, Pointillism Art: subject:  Alien penguin, background: [forest, hills, mountains, trees, floews], dark, 8k,',
                                                    1000,
                                                ]}
                                                wrapper='p'
                                                speed={50}
                                                className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'
                                                // style={{ fontSize: '2em' }}
                                                repeat={0}
                                        />
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="https://th.bing.com/th/id/OIG1..0OTBFMBCaUI3eDVmpNw?w=1024&h=1024&rs=1&pid=ImgDetMain" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://th.bing.com/th/id/OIG3.P.MV31PpRvNNBziugcRS?pid=ImgGn" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://th.bing.com/th/id/OIG1._rVSmzWw03tMZB_7Zs6e?pid=ImgGn" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://th.bing.com/th/id/OIG1.vcsNar208cpNTLkgZLc4?w=1024&h=1024&rs=1&pid=ImgDetMain" />
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MinimalismPointillism;