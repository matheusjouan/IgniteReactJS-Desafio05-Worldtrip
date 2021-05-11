import { Box } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { SliderItem } from './SliderItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface Continent {
  slug: string;
  name: string;
  sliderImage: string;
  title: string;
}

interface SliderProps {
  continents: Continent[];
}


export const Slider = ({ continents }: SliderProps) => {
  return (
    <Box
      w="100%"
      mt={{ base: '1.25rem', lg: "3.25rem" }}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >

        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
            <SliderItem continent={continent} />
          </SwiperSlide>
        ))}

      </Swiper>
    </Box>
  )
}