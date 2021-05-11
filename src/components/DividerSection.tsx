import { Divider } from '@chakra-ui/react';

export const DividerSection = () => {
  return (
    <Divider
      mx="auto"
      w={{ base: "60px", lg: "90px" }}
      borderColor="gray.600"
      bg="gray.600"
      border={{ base: "1px", lg: "2px" }}
      mt={{ base: '1.5rem', lg: '4rem' }}
    />
  )
}