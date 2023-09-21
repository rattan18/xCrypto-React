import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorControl = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorControl;
