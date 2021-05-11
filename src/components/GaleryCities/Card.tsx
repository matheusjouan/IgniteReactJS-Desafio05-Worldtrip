import { Box, Image, Flex, Text } from '@chakra-ui/react';

import ReactCountryFlag from 'react-country-flag';

interface CardProps {
  city: {
    cityName: string;
    countryName: string;
    countryCode: string;
    cityImage: string;
  }
}

export const Card = ({ city }: CardProps) => {
  return (
    <Flex
      flexDir="column"
      w={256}
      mx={{ base: 'auto', lg: '0' }}
    >
      <Image
        src={city.cityImage}
        w={256}
        h={173}
      />

      <Flex
        align="center"
        justify="space-between"
        py="1.25rem"
        px="1.5rem"
        borderWidth="1px"
        borderColor="yellow.500"
        height={{ base: 'auto', md: '110px' }}
      >
        <Box>
          <Text
            color="gray.600"
            fontSize="1.25rem"
            fontWeight={600}
            lineHeight="1.5rem"
          >
            {city.cityName}
          </Text>
          <Text
            mt="0.75rem"
            fontWeight={500}
            fontSize="1rem"
            color="gray.400"

          >
            {city.countryName}
          </Text>
        </Box>
        <ReactCountryFlag
          countryCode={city.countryCode}
          svg
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "1px solid #DADADA",
          }}
          title={city.countryCode}
        />

      </Flex>

    </Flex>
  )
}