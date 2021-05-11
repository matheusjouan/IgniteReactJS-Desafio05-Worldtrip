import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SliderItemProps {
  continent: {
    slug: string;
    name: string;
    sliderImage: string;
    title: string;
  }
}

export const SliderItem = ({ continent }: SliderItemProps) => {
  return (
    <Flex
      width="100%"
      h={{ base: '250px', lg: '450px' }}
      bgImage={`url(${continent.sliderImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
    >
      <Link href={`/continents/${continent.slug}`}>
        <a>
          <Heading
            fontWeight="700"
            fontSize={{ base: '1.5rem', lg: '3rem' }}
            lineHeight={{ base: '2.25rem', lg: '4.5rem' }}
            color="gray.300"
          >
            {continent.name}
          </Heading>

          <Text
            fontWeight="700"
            fontSize={{ base: '0.875rem', lg: '1.5rem' }}
            lineHeight={{ base: '1.25rem', lg: '2.25rem' }}
            mt={{ base: '', lg: '1rem' }}
            color="gray.300"
            maxW={{ base: '250px', lg: '100%' }}

          >
            {continent.title}
          </Text>
        </a>
      </Link>

    </Flex>
  )
}