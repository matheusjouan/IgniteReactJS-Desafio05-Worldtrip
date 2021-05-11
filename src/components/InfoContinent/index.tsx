import { Flex } from '@chakra-ui/react';
import { Description } from './Description';
import { Info } from './Info';

import { ContinentProps } from '../../pages/continents/[slug]';


export const InfoContinent = ({ continent }: ContinentProps) => {


  return (
    <Flex
      mt={{ base: '1.5rem', lg: '5rem' }}
      maxW={1280}
      mx="auto"
      px={{ base: '1rem', lg: "3.75rem" }}
      flexDir={{ base: 'column', lg: 'row' }}
      justify={{ base: '', lg: 'space-between' }}
      align="center"
    >
      <Description continent={continent} />
      <Info continent={continent} />
    </Flex>
  )
}