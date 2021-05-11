import { GetStaticPaths, GetStaticProps } from "next";
import { Box } from "@chakra-ui/react"

import { BannerContinent } from "../../components/BannerContinent";
import { GaleryCities } from "../../components/GaleryCities";
import { Header } from "../../components/Header"
import { InfoContinent } from "../../components/InfoContinent";
import { api } from "../../services/api";
import { useRouter } from "next/dist/client/router";
import Loading from "../../components/Loading";


export interface ContinentProps {
  continent: {
    slug: string;
    name: string;
    description: string;
    bannerImage: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    amountMostPopularCities: number;
    mostPopularCities: {
      cityName: string;
      countryName: string;
      countryCode: string;
      cityImage: string;
    }[]
  }
}

const Continent = ({ continent }: ContinentProps) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <Box
      pb="2.5rem"
    >
      <Header />
      <BannerContinent
        image={continent.bannerImage}
        name={continent.name}
      />

      <InfoContinent continent={continent} />

      <GaleryCities cities={continent.mostPopularCities} />

    </Box>
  )
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {

  const { data } = await api.get(`/continents`);

  const paths = data.map(continent => {
    return {
      params: {
        slug: continent.slug,
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params;

  const { data } = await api.get(`/continents?slug=${slug}`);
  const continent = data[0];



  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24, // 24h
  }
}