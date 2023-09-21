import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader.jsx";
import ErrorControl from "./ErrorControl";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setLoading(false);
        setCoins(data);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, page]);

  if (error) {
    return <ErrorControl message={"Error while fetching coins"} />;
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
        <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
          <HStack spacing={'5'}>
            <Radio value="inr">INR</Radio>
            <Radio value="usd">USD</Radio>
            <Radio value="eur">EUR</Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"center"}>
            {coins.map((i) => (
              <CoinCard
                name={i.name}
                id={i.id}
                key={i.id}
                img={i.image}
                symbol={i.symbol}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
        </>
      )}

      <HStack w={"full"} overflowX={"auto"} m={'8'}>
        {btns.map((item, index) => {
          return (
            <Button
              key={index}
              bgColor={"blackAlpha.900"}
              color={"white"}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </Button>
          );
        })}
      </HStack>
    </Container>
  );
};

export default Coins;
