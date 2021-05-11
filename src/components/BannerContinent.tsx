import { Box, Heading, Flex } from '@chakra-ui/react';

interface BannerContinentProps {
  name: string;
  image: string;
}

export const BannerContinent = ({ image, name }: BannerContinentProps) => {
  return (
    <Box
      w="100%"
      h={{ base: '150px', lg: '500px' }}
      bg={`url(${image})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
    >

      <Flex
        w="100%"
        h="100%"
        maxW={1280}
        mx="auto"
        px={{ base: '1rem', lg: "3.75rem" }}
        align={{ base: 'center', lg: 'none' }}
        justify={{ base: 'center', lg: 'flex-start' }}
        pt={{ base: '0', lg: '350px' }}

      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '1.75rem', lg: '3rem' }}
          lineHeight={{ base: '2.5rem', lg: '4.5rem' }}
          color="gray.50"
        >
          {name}
        </Heading>
      </Flex>


    </Box>
  )
}