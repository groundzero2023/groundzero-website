import React from "react";
import styles from "../style";
import "../index.css";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { pastEvents, pastEventDescription } from "../constants";

const PastEvents = () => (
  <section>
    <div className={`${styles.paddingY} flex-col relative`} id="about">
      <div className="grid place-items-center text-white xs:px-16 lg:px-40">
        <div className="heading">
          Past Events
          <div className="pb-10"></div>
          {pastEventDescription.map((pastEvent) => (
            <div className="font-light md:text-2xl text-[16px] pb-9 text-justify">
              <p>{pastEvent.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
      effect={"coverflow"}
      spaceBetween={0}
      slidesPerView={3}
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 1,
      }}
      centeredSlides={true}
    >
      {pastEvents.map((pastEvent) => (
        <SwiperSlide key={pastEvent.id} className="mb-10">
          <div class="past-event-container">
            <img src={pastEvent.content} className="past-event-image" />
            {/* <div class="past-event-image-title">{pastEvent.title}</div> */}
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  </section>
);

export default PastEvents;
