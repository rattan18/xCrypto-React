import React from "react";
import { Link } from "react-router-dom";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol="₹" }) => (
  <Link to={`/coin/${id}`} target="blank">
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
      <Heading size={"md"} noOfLines={1} p={'2'}>
        {symbol}
      </Heading>
      <Text noOfLines={"1"}>{name}</Text>
      <Text noOfLines={"1"}>{price ? `${currencySymbol}${price}` : "Na"}</Text>
    </VStack>
  </Link>
);

export default CoinCard;
