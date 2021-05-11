import { Title } from "./Title"
import { Box } from '@chakra-ui/react';
import { Slider } from "./Slider";


interface Continent {
  slug: string;
  name: string;
  sliderImage: string;
  title: string;
}

interface CarouselProps {
  continents: Continent[];
}

export const Carousel = ({ continents }: CarouselProps) => {
  return (
    <Box
      maxW={{ base: '100%', lg: '1280px' }}
      flexDir="column"
      align="center"
      justify="center"
      mt={{ base: '1.5rem', lg: '3.25rem' }}
      mx="auto"
    >
      <Title />

      <Slider continents={continents} />
    </Box>
  )
}




