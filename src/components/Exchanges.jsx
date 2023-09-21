import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader.jsx";
import ErrorControl from "./ErrorControl";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setLoading(false);
        setExchanges(data);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  if (error) {
    return <ErrorControl message={"Error while fetching exchanges"} />;
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"center"}>
            {exchanges.map((i) => (
              <ExchangeCard
                name={i.name}
                id={i.id}
                img={i.image}
                url={i.url}
                rank={i.trust_score_rank}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, url, rank }) => (
  <a href={url} target="blank">
    <VStack
      w={52}
      shadow={"lg"}
      p={"8"}
      borderRadius={"xl"}
      m={"4"}
      transition={"all 0.3s"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image src={img} />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={"1"}>{name}</Text>
    </VStack>
  </a>
);
export default Exchanges;
