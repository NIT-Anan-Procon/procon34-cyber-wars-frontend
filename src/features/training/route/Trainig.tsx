import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { EndSlide, SlideWrapper } from '../slide';

import { Button } from '@/components/Elements';
import styled from 'styled-components';
import { colors } from '@/assets/styles';

import initialSlide from '@/assets/images/initialSlide.png';
import attackSlide1 from '@/assets/images/attackSlide.png';
import attackSlide2 from '@/assets/images/attackSlide2.png';
import attackSlide3 from '@/assets/images/attackSlide3.png';
import attackSlide4 from '@/assets/images/attackSlide4.png';
import defenceSlide from '@/assets/images/defenceSlide.png';
import battleSlide  from '@/assets/images/battleSlide.png';

const $ReturnButton= styled(Button)`
  height  : 10rem;
  width   : 20rem;
  display : flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top     : 0;
  left    : 0;
  border-radius: 0px 0px 20px 0px;
  background: ${ colors.bgDarker };
`;

const ReturnIconStyle= {
  fontSize: '5rem',
  color   : `${ colors.bgLighter }` 
};

export const Training= () => {
  const navigate= useNavigate();

  const slide=[
    {
      title: 'アタックフェーズ',
      path : attackSlide1,
    },
    {
      title: 'アタックフェーズ',
      path : attackSlide2,
    },
    {
      title: 'アタックフェーズ',
      path : attackSlide2,
    },
    {
      title: 'アタックフェーズ',
      path : attackSlide3,
    },
    {
      title: 'アタックフェーズ',
      path : attackSlide4,
    },
    {
      title: 'ディフェンスフェーズ',
      path : defenceSlide,
    },
    {
      title: 'バトルフェーズ',
      path : battleSlide,
    },
  ];

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
        <SwiperSlide>
          <SlideWrapper title={ '訓練モード' } >
            <img src={ initialSlide } />
          </SlideWrapper>
          <$ReturnButton onClick={ () => navigate('../') } >
            <SubdirectoryArrowLeftIcon style={ ReturnIconStyle } />
          </$ReturnButton>
        </SwiperSlide>
        { slide.map((slide, index) => (
            <SwiperSlide key={index} >
              <SlideWrapper title={ slide.title } >
                <img src={ slide.path } />
              </SlideWrapper>
            </SwiperSlide>
          ))
        }
        <SwiperSlide><EndSlide /></SwiperSlide>
      </Swiper>
    </>
  );
}
