// import { TypeAnimation } from 'react-type-animation';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';
// import MinimalismPointillism from './Features/ArtStyles/MinimalismPointillism/MinimalismPointillism';
// import Illustration from './Features/ArtStyles/Illustration/Illustration';
import ArtCard from './Features/ArtCards/ArtCard';
import Features from './Features/Features';
import ArtPlatforms from './Features/Platfotms/ArtPlatforms';
import PromptEngineering from './PromptEngineering/PromptEngineering';

const Featured = () => {
    return (
        <div className=''>
            <div className="mx-auto my-12 drop-shadow-2xl xs:[320px] sm:[450px] md:[724px] lg:w-[1024px] xl:[1280px]  border-2 border-r-emerald-400 ">
                <div className="my-12 w-full flex flex-col items-center justify-center text-center ">
                    <h1 className="my-6 text-3xl font-bold font-playfair">Masterpieces, Exceptional Artworks</h1>
                    <p className="mb-12 text-ash-gray font-newAmsterdam">
                        Discover our featured collection of outstanding artworks, each piece handpicked for its  uniqueness and artistry. <br />These highlighted masterpieces represent the pinnacle of creativity <br /> and innovation from talented artists around the globe.
                    </p>
                </div>
                <div>
                    {/* features 1 */}
                    <div>
                        <Features></Features>
                    </div>
                </div>
            </div >
            <div className='flex flex-col '>
                <div className="mx-auto my-12 drop-shadow-2xl xs:[320px] sm:[450px] md:[724px] lg:w-[1024px] xl:[1280px]  border-2 border-r-emerald-400 ">
                    <PromptEngineering></PromptEngineering>
                </div>
                <div className="mx-auto my-12 drop-shadow-2xl xs:[320px] sm:[450px] md:[724px] lg:w-[1024px] xl:[1280px]  border-2 border-r-emerald-400 ">
                    <ArtPlatforms></ArtPlatforms>
                </div>
                <div className='mx-auto my-12 drop-shadow-2xl xs:[320px] sm:[450px] md:[724px] lg:w-[1024px] xl:[1280px]  border-2 border-r-emerald-400 '>
                    <ArtCard></ArtCard>
                </div>
            </div>
        </div>
    );
};

export default Featured;