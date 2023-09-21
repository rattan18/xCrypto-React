import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack bgColor={"blackAlpha.900"} p={"3"} shadow={"base"}>
      <Button
        variant={"unstyled"}
        color={"white"}
        mr={"4"}
        css={{
          "&:hover": {
            color: "rgb(157, 155, 137)",
          },
        }}
      >
        <Link to={"/"}>Home</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        mr={"4"}
        css={{
          "&:hover": {
            color: "rgb(157, 155, 137)",
          },
        }}
      >
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        css={{
          "&:hover": {
            color: "rgb(157, 155, 137)",
          },
        }}
      >
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
