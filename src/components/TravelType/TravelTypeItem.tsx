import { Text, Image, Flex, Icon, useBreakpointValue, } from '@chakra-ui/react'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

interface TravelTypeItemProps {
  image: string;
  text: string;
}

export const TravelTypeItem = ({ image, text }: TravelTypeItemProps) => {

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true
  });


  return (
    <Flex
      flexDir={{ base: 'row', md: 'column', lg: 'column' }}
      align="center"
      py="0.75rem"
      minW={{ base: 'auto', lg: '160px' }}
    >

      {isWideVersion ? (
        <Image src={image} />
      ) :
        (
          <Icon
            as={RiCheckboxBlankCircleFill}
            h="8px"
            w="8px"
            color="yellow.100"
            mr="0.5rem"
          />
        )}

      <Text
        color="gray.600"
        fontSize={{ base: '1.125rem', lg: "1.5rem" }}
        lineHeight="2.25rem"
        mt={{ base: '0', lg: '1.5rem' }}
        fontWeight={{ base: "500", lg: "600" }}
      >
        {text}
      </Text>
    </Flex>
  );
}