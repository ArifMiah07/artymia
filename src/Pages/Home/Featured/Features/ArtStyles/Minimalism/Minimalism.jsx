import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import MiniHeaderCard from '../../../../../../Components/Cards/MiniHeaderCard/MiniHeaderCard';

const Minimalism = () => {
    return (
        <>
            <MiniHeaderCard  bg_clr={'bg-tropical-forest'} headerText={'Minimalism'}></MiniHeaderCard>
            <div className="relative h-[500px]"> {/* Constrain the parent container height */}
                <Swiper
                    className="mySwiper swiper-h h-full"
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    <SwiperSlide>
                        <div>
                            <img src="https://ideogram.ai/assets/image/lossless/response/OBHn9_EOTgiAbzvAkiN5sg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full"> {/* i got some bug here; So, Ensure full height for the vertical swiper */}
                            <Swiper
                                className="mySwiper2 swiper-v h-full"
                                direction={'vertical'}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                            >
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/assets/progressive-image/balanced/response/s0li-QPoQu6VrzhcyWeBTw" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/assets/progressive-image/balanced/response/l7mTbWfDR-iJtMTJ-L78ZA" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/assets/progressive-image/balanced/response/5WSfUi3kTcGLJ3n6Tcso2Q" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/assets/progressive-image/balanced/response/xDoHNCR8TGOlm2hmOukzXg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/assets/progressive-image/balanced/response/FJHkf44pSEeJxPj3eT8N-g" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Minimalism;
