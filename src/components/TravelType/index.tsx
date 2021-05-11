import { Flex } from '@chakra-ui/react'
import { TravelTypeItem } from './TravelTypeItem'


export const TravelType = () => {
  return (
    <>
      <Flex
        maxW={{ base: "275px", md: '980px', lg: "1160px" }}
        mt={{ base: '2rem', lg: "6.25rem" }}
        mx="auto"
        flexWrap="wrap"
        justify="space-around"

      >
        <TravelTypeItem image="/assets/cocktail.svg" text="vida noturna" />
        <TravelTypeItem image="/assets/surf.svg" text="praia" />
        <TravelTypeItem image="/assets/building.svg" text="moderno" />
        <TravelTypeItem image="/assets/museum.svg" text="clássico" />
        <TravelTypeItem image="/assets/earth.svg" text="e mais..." />
      </Flex>

    </>
  );
}

