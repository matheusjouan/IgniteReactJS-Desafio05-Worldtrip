import { Box, SimpleGrid, Heading } from '@chakra-ui/react'
import { Card } from './Card'

interface GaleryCitiesProps {
  cities: {
    cityName: string;
    countryName: string;
    countryCode: string;
    cityImage: string;
  }[]
}

export const GaleryCities = ({ cities }: GaleryCitiesProps) => {

  return (
    <Box
      mt={{ base: '2rem', lg: '5rem' }}
      maxW={1280}
      mx="auto"
      px={{ base: '1rem', lg: "3.75rem" }}
    >
      <Heading
        color="gray.600"
        fontWeight={500}
        fontSize={{ base: '1.5rem', lg: '2rem' }}
        lineHeight={{ base: '2.25rem', lg: '3.25rem' }}
      >
        Cidades +100
      </Heading>

      <SimpleGrid
        column={{ base: '1', lg: "4" }}
        minChildWidth="256px"
        spacing={{ base: '1.5rem', lg: "2.80rem" }}
        mt={{ base: '1.25rem', lg: '2.5rem' }}
      >
        {cities.map(city => (
          <Card
            key={city.cityName}
            city={city}
          />
        ))}
      </SimpleGrid>



    </Box>
  )
}