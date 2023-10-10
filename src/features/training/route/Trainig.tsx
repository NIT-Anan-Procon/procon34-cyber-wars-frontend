import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { AttackPhaseSlide, BattlePhaseSlide, DefencePhaseSlide, EndSlide, ExplanationSlide, InitialSlide } from '../slide';

export const Training= () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><InitialSlide /></SwiperSlide>
        <SwiperSlide><AttackPhaseSlide /></SwiperSlide>
        <SwiperSlide><DefencePhaseSlide /></SwiperSlide>
        <SwiperSlide><BattlePhaseSlide /></SwiperSlide>
        <SwiperSlide><ExplanationSlide /></SwiperSlide>
        <SwiperSlide><EndSlide /></SwiperSlide>
      </Swiper>
    </>
  );
}
