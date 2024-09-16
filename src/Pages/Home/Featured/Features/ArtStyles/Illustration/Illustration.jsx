import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import MiniHeaderCard from '../../../../../../Components/Cards/MiniHeaderCard/MiniHeaderCard';

const  Illustration = () => {
    return (
        <>
            <MiniHeaderCard headerText={'Illustration'}></MiniHeaderCard>
            <div className="relative h-[500px]"> {/* Constrain the parent container height */}
                {/* main swiper */}
                <Swiper
                    className="mySwiper swiper-h h-full"
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    {/* main swiperSlide */}
                    {/* swiper slide 1 */}
                    <SwiperSlide>
                        <div className="h-full"> {/* i got some bug here; So, Ensure full height for the vertical swiper */}
                            {/* Sub swiperSlide */}
                            <Swiper
                                className="mySwiper2 swiper-v h-full"
                                direction={'vertical'}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                            >
                                {/* SUb swiperSlide */}
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
                                    <img src="https://ideogram.ai/assets/image/lossless/response/82zEfkJDTCG8yJzMa8ICnA" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/assets/image/lossless/response/ex9dMrDHQ9ua4pWy-brPnQ" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/assets/image/lossless/response/t6LEDHTmQMO0gdu-TA0OfA" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </SwiperSlide>
                    {/* swiper slide 2 */}
                    <SwiperSlide>
                        <div className="h-full"> {/* i got some bug here; So, Ensure full height for the vertical swiper */}
                            {/* Sub swiperSlide */}
                            <Swiper
                                className="mySwiper2 swiper-v h-full"
                                direction={'vertical'}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                            >
                                {/* SUb swiperSlide */}
                                <SwiperSlide>
                                    <div className='relative group'>
                                        <div className="absolute inset-0 flex flex-col p-12 justify-center items-center z-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                            <div className='flex flex-col justify-between  opacity-60 w-full h-full'>
                                                <p className=" p-12 mb-8 font-montserrat bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                                    <TypeAnimation
                                                            sequence={[
                                                                // Same substring at the start will only be typed once, initially
                                                                'Design an informative, visually striking logo for a Facebook group titled "Batman AI Art." The logo should prominently display the groups name, "Batman AI Art," as the main subject. In the left corner, include text that reads: "A Facebook group with over 100K members," ensuring it complements the overall design. Incorporate elements that reflect both the Batman theme and the creative essence of AI art.',
                                                                1000,
                                                                'A visually striking logo for the Facebook group "Batman AI Art". In the center, there is a silhouette of Batman with the background as a city skyline. The Batman silhouette is created through the use of AI art. Below the silhouette, the text "Batman AI Art" is written in bold, black font. In the left corner, there is a subtle text that reads "A Facebook group with over 100K members". The overall design has a dark background.',
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
                                            <img src="https://ideogram.ai/api/images/direct/6aED-eIPSNCEVWjKtELLQA.jpg" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/api/images/direct/IkvsN6dyRXCNKheFBU5Ygg.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/api/images/direct/UsiTrikTQhy63Qr4m4pnFw.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://ideogram.ai/api/images/direct/afYh2zK0Q1y7OKvmzeo5gg.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default  Illustration;
