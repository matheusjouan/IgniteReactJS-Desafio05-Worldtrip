import { Heading } from '@chakra-ui/react';


export const Title = () => {
  return (
    <Heading
      color="gray.600"
      fontSize={{ base: '1.25rem', lg: '2.25rem' }}
      lineHeight={{ base: '1.875rem', lg: '3.25rem' }}
      textAlign="center"
      fontWeight={500}
    >
      Vamos nessa? <br />
      Então escolha seu continente
    </Heading>
  )
}