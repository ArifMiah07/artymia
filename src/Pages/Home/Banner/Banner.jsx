import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="relative group">
            {/* Text that will be visible on hover */}
            <div className="absolute inset-0 flex flex-col p-3 justify-center items-center z-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h1 className="p-5 bg-magenta-breeze text-3xl font-bungeeTint">Welcome to Artymia</h1>
                <p className="p-5 bg-forest-sunrise mb-8 font-montserrat">Explore our curated collection of standout AI-generated artworks. Discover unique pieces, handpicked for their creativity and impact.</p>
            </div>
            {/* Carousel */}
            <div className="relative">
                <Carousel
                    autoPlay={true}
                    interval={2000}
                    infiniteLoop={true}
                >
                    <div>
                        <img src="https://ideogram.ai/assets/image/lossless/response/-sh1EEQ1RyyDohJH_qj42w" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/ZQ5XnjQWQPWY-WKQ3t7xKA" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/aK6OIb67QmCHZYZtcc-h0g" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/image/lossless/response/tWYEXqIaQ5qnx0dUGEzr3w" />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/9k26TJTvTgmaRSGa7QUa8w" />
                        <p className="legend">Legend 5</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/HlcEVc3nRRukihkLClYDaA" />
                        <p className="legend">Legend 6</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/image/lossless/response/NEqBp3ZYR1q9Tpr9aBlsiQ" />
                        <p className="legend">Legend 7</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/jpnef988RoaYikp00AKl-A" />
                        <p className="legend">Legend 8</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/HDmwQ8XpQTC8TIIcTKMl5g" />
                        <p className="legend">Legend 9</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/QvFOiLZsSWm56R8-fNZ86A" />
                        <p className="legend">Legend 10</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/UZu-H8LFRNSeDh8pmr5c6w" />
                        <p className="legend">Legend 11</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/image/lossless/response/VZP90MJZSYa5MSJJemf29Q" />
                        <p className="legend">Legend 12</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/image/lossless/response/4jXtql7URvCFBOND7ker2A" />
                        <p className="legend">Legend 13</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/image/lossless/response/o5yPj8nrSPyuaWZg_EIWwQ" />
                        <p className="legend">Legend 14</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/image/lossless/response/rFGJmFHPSRqJTvCyBo9kxw" />
                        <p className="legend">Legend 15</p>
                    </div>
                    <div>
                        <img src="https://ideogram.ai/assets/image/lossless/response/xJWPn4DPRge5KQryg3O_1w" />
                        <p className="legend">Legend 16</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;
