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

const Illustration = () => {
    return (
        <div>
            <div>
                <MiniHeaderCard headerText={'Illustration'}></MiniHeaderCard>
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
                                                    'draw: minimalistic image of penguin, dark, 8k, illustration',
                                                    1000,
                                                    'A striking minimalistic illustration of a solitary penguin in the dark. The penguin is rendered in a monochrome palette with a touch of blue to emphasize its unique features. The background is a deep, dark abyss that adds to the mysterious atmosphere. The overall composition is both elegant and dramatic, with sharp lines and contrasts that make the penguin stand out in the high-resolution image., illustration',
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
                                <img src="https://ideogram.ai/assets/image/lossless/response/eq_Iig4uS-Gw_Fq_tIXpBA" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ideogram.ai/assets/image/lossless/response/82zEfkJDTCG8yJzMa8ICnA" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ideogram.ai/assets/image/lossless/response/ex9dMrDHQ9ua4pWy-brPnQ" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ideogram.ai/assets/image/lossless/response/t6LEDHTmQMO0gdu-TA0OfA" />
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Illustration;