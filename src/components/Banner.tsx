import { Box, Text, Image, Flex, Heading, useBreakpointValue } from '@chakra-ui/react'

export const Banner = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      w="100%"
      bg="url('/assets/Background.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      h={{ base: '163px', lg: '335px' }}
    >
      <Flex
        justifyContent="space-between"
        maxW={1280}
        mx="auto"
        px={{ base: '1rem', lg: "3.75rem" }}
      >
        <Box
          mt={{ base: '1.75rem', lg: '5rem' }}
          maxWidth={512}
        >
          <Heading
            as="h1"
            color="gray.50"
            fontWeight={500}
            fontSize={{ base: '1.25rem', lg: '2.25rem' }}
            lineHeight={{ base: '1.875rem', lg: '3.375rem' }}
          >
            5 Continentes, <br />
          infinitas possibilidades.
        </Heading>

          <Text
            color="gray.300"
            fontSize={{ base: '0.875rem', lg: '1.25rem' }}
            lineHeight={{ base: '1.315', lg: '1.875rem' }}
            mt={{ base: '0.5rem', lg: '1.25rem' }}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
        </Box>
        {isWideVersion && (
          <Box>
            <Image
              src="/assets/airplane.svg"
              h={270}
              mt="25%"
            />
          </Box>
        )}

      </Flex>
    </Box>

  )
}