import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const url = "http://localhost:1337/graphql";
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
