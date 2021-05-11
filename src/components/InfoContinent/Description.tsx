import { Box, Text } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continents/[slug]';

export const Description = ({ continent }: ContinentProps) => {
  return (
    <Box
      maxW={600}
    >
      <Text
        fontSize={{ base: '0.875rem', lg: '1.5rem' }}
        lineHeight={{ base: '1.25rem', lg: '2.25rem' }}
        color="gray.600"
      >
        {continent.description}
      </Text>
    </Box>
  )
}