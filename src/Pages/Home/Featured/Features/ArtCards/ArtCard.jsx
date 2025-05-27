import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import img1 from "../../../../../assets/images/card-img/1.jpg";
import img2 from "../../../../../assets/images/card-img/2.jpg";
import img3 from "../../../../../assets/images/card-img/3.jpg";
import img4 from "../../../../../assets/images/card-img/4.jpg";
import img5 from "../../../../../assets/images/card-img/5.jpg";
import img6 from "../../../../../assets/images/card-img/6.jpg";
import img7 from "../../../../../assets/images/card-img/7.jpg";
import img8 from "../../../../../assets/images/card-img/8.jpg";
import img9 from "../../../../../assets/images/card-img/9.jpg";
import img10 from "../../../../../assets/images/card-img/10.jpg";
import img11 from "../../../../../assets/images/card-img/11.jpg";
import img12 from "../../../../../assets/images/card-img/12.jpg";
// ... other image imports
import HeaderCard from "../../../../../Components/Cards/HeaderCard/HeaderCard";
import MiniHeaderCard from "../../../../../Components/Cards/MiniHeaderCard/MiniHeaderCard";

const ArtCard = () => {
  const imgLink = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  console.log(imgLink);

  return (
    <div className="mb-24 mx-auto my-12 drop-shadow-2xl xs:[320px] sm:[450px] md:[724px] lg:w-[1024px] xl:[1280px]  border-2 border-r-emerald-400 ">
      {/* header section */}
      <header>
        <HeaderCard headingText={"Edited Art Collection"}></HeaderCard>
      </header>
      {/* main section */}
      <main className="px-0">
        {/* section 1 */}
        <section className="border mb-0 border-gray-700">
          <MiniHeaderCard
            headerText={"Anime"}
            bg_clr={"bg-purple-haze"}></MiniHeaderCard>
          <div className=" p-8 border-y-4 border-gray-200">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
              // No explicit width and height, Tailwind CSS will handle it
              style={{ width: "300px", height: "auto" }}>
              <SwiperSlide>
                <img src={img1} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img7} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img8} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img9} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img10}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img11}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img12}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              {/* Add more SwiperSlide components as needed */}
            </Swiper>

            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {imgLink.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`img number ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* section 2 */}
        {/* <section className="border border-gray-700 my-12">
          <MiniHeaderCard
            bg_clr={"bg-cyber-space"}
            headerText={"Anime"}></MiniHeaderCard>
          <div className="p-8 border-y-4 border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {imgLink.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`img number ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div> */}

            {/* <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
              // No explicit width and height, Tailwind CSS will handle it
              style={{ width: "100%", height: "auto" }}> */}
            {/* <SwiperSlide>
                <img src={img1} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" className="w-full h-auto object-cover" />
              </SwiperSlide> */}
            {/* <SwiperSlide>
                                <img src={img4} alt="" className="w-full h-auto object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img5} alt="" className="w-full h-auto object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img6} alt="" className="w-full h-auto object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img7} alt="" className="w-full h-auto object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img8} alt="" className="w-full h-auto object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img9} alt="" className="w-full h-auto object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img10} alt="" className="w-full h-auto object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img11} alt="" className="w-full h-auto object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img12} alt="" className="w-full h-auto object-cover" />
                            </SwiperSlide> */}
            {/* Add more SwiperSlide components as needed */}
            {/* </Swiper> */}
          {/* </div>
        </section> */}
      </main>
    </div>
  );
};

export default ArtCard;
