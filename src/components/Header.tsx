import { Flex, Image, Icon, Link as ChakraLink, Box, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

import Link from 'next/link';

import { RiArrowLeftSLine, RiArrowDropLeftLine } from 'react-icons/ri';

export const Header = () => {

  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      w="100%"
      h={{ base: "50px", lg: "100px" }}
      maxW={1280}
      mx="auto"
      px="3.75rem"
      position="relative"
    >

      {asPath !== "/" && (
        <Link href="/" >
          <ChakraLink
            display="block"
            mr="auto"
            position="absolute"
            left={{ base: "0.5rem", lg: "3.5rem" }}
          >
            <Icon
              as={RiArrowLeftSLine}
              boxSize={{ base: '20px', lg: '32px' }}
              color="dark.textheading"
            />
          </ChakraLink>
        </Link>
      )}

      <Box>
        <Image
          src="/assets/Logo.svg"
          alt="World Trip"
          w={{ base: '81px', lg: '187px' }}
          h={{ base: '20px', lg: '46px' }}
        />
      </Box>


    </Flex>



  )
}