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

const Featured = () => {
    return (
        <div className="mx-auto my-12 drop-shadow-2xl xs:[320px] sm:[450px] md:[724px] lg:w-[1024px] xl:[1280px]  border-2 border-r-emerald-400 ">
            <div className="my-12 w-full flex flex-col items-center justify-center text-center ">
                <h1 className="my-6 text-3xl font-bold font-playfair">Masterpieces, Exceptional Artworks</h1>
                <p className="mb-12 text-ash-gray font-newAmsterdam">
                    Discover our featured collection of outstanding artworks, each piece handpicked for its  uniqueness and artistry. <br />These highlighted masterpieces represent the pinnacle of creativity <br /> and innovation from talented artists around the globe.
                </p>
            </div>
            <div>
                {/* featured section */}
                {/* <h1>Illustration</h1> */}
                <div>
                    <div className="bg-forest-sunrise w-full flex flex-col items-center justify-center text-center ">
                        <h1 className="my-6 text-3xl font-bold font-newAmsterdam">Illustration</h1>
                            
                        {/* <p className="mb-12 font-playfair">
                            Discover our featured collection of outstanding artworks, each piece handpicked for its  uniqueness and artistry. <br />These highlighted masterpieces represent the pinnacle of creativity <br /> and innovation from talented artists around the globe.
                        </p> */}
                    </div>
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
                                                    speed={50}
                                                    style={{ fontSize: '2em' }}
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
                {/* Minimalism, Pointillism Art: */}
                <div>
                    <div className="bg-forest-sunrise w-full flex flex-col items-center justify-center text-center ">
                        <h1 className="my-6 text-3xl font-bold font-newAmsterdam">Illustration</h1>
                            
                        {/* <p className="mb-12 font-playfair">
                            Discover our featured collection of outstanding artworks, each piece handpicked for its  uniqueness and artistry. <br />These highlighted masterpieces represent the pinnacle of creativity <br /> and innovation from talented artists around the globe.
                        </p> */}
                    </div>
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
                                                    speed={50}
                                                    style={{ fontSize: '2em' }}
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
        </div>
    );
};

export default Featured;