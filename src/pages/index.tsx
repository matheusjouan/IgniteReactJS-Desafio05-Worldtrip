import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { DividerSection } from "../components/DividerSection";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { TravelType } from "../components/TravelType";
import { GetStaticProps } from "next";
import { api } from "../services/api";

interface Continent {
  slug: string;
  name: string;
  sliderImage: string;
  title: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {

  return (
    <Box
      mx="auto"
      pb={{ base: '1.5rem', lg: '2.5rem' }}
    >
      <Header />
      <Banner />
      <TravelType />
      <DividerSection />
      <Carousel continents={continents} />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Continent[]>('/continents');

  const continents = response.data.map(continent => {
    return {
      slug: continent.slug,
      name: continent.name,
      title: continent.title,
      sliderImage: continent.sliderImage
    }
  })

  return {
    props: {
      continents
    },
    revalidate: 60 * 60 * 24,
  }
}


