import { Flex, Box, Text } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continents/[slug]';

export const Info = ({ continent }: ContinentProps) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      maxW={490}
      w="100%"
      ml={{ base: '0', lg: '4rem' }}
      mt={{ base: '1.5rem', lg: '0' }}
      flex={{ base: '1', lg: "1 0 400px" }}
    >
      <Box
        textAlign="center"
      >
        <Text
          fontWeight={600}
          fontSize={{ base: '2rem', lg: '3rem' }}
          lineHeight={{ base: '3,5rem', lg: '4.5rem' }}
          color={'yellow.100'}
        >
          {continent.numberOfCountries}
        </Text>
        <Text
          color="gray.600"
          fontWeight={600}
          fontSize={{ base: '1rem', lg: '1.5rem' }}
          lineHeight={{ base: '1.25rem', lg: '1.75rem' }}
        >
          países
        </Text>
      </Box>

      <Box
        textAlign="center"
      >
        <Text
          fontWeight={600}
          fontSize={{ base: '2rem', lg: '3rem' }}
          lineHeight={{ base: '3,5rem', lg: '4.5rem' }}
          color={'yellow.100'}
        >
          {continent.numberOfLanguages}
        </Text>
        <Text
          color="gray.600"
          fontWeight={600}
          fontSize={{ base: '1rem', lg: '1.5rem' }}
          lineHeight={{ base: '1.25rem', lg: '1.75rem' }}
        >
          línguas
        </Text>
      </Box>

      <Box
        textAlign="center"
      >
        <Text
          fontWeight={600}
          fontSize={{ base: '2rem', lg: '3rem' }}
          lineHeight={{ base: '3,5rem', lg: '4.5rem' }}
          color={'yellow.100'}
        >
          {continent.amountMostPopularCities}
        </Text>
        <Text
          color="gray.600"
          fontWeight={600}
          fontSize={{ base: '1rem', lg: '1.5rem' }}
          lineHeight={{ base: '1.25rem', lg: '1.75rem' }}
        >
          cidades +100
        </Text>
      </Box>
    </Flex>
  )
}