
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
        <div className="mx-auto my-12 drop-shadow-2xl w-[1224px] border-2 border-r-emerald-400 ">
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
                        <h1 className="my-6 text-3xl font-bold font-newAmsterdam">Masterpieces, Exceptional Artworks</h1>
                        <p className="mb-12 font-playfair">
                            Discover our featured collection of outstanding artworks, each piece handpicked for its  uniqueness and artistry. <br />These highlighted masterpieces represent the pinnacle of creativity <br /> and innovation from talented artists around the globe.
                        </p>
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
                                    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% opacity-30 w-full h-full'>
                                        {/* <h1 className="p-5 bg-magenta-breeze text-3xl font-bungeeTint">Welcome to Artymia</h1>
                                        <p className="p-5 bg-forest-sunrise mb-8 font-montserrat">Explore our curated collection of standout AI-generated artworks. Discover unique pieces, handpicked for their creativity and impact.</p> */}
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
        </div>
    );
};

export default Featured;