import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";

// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// const url = "https://lhscms.herokuapp.com/graphql";
// const client = new ApolloClient({
//   uri: url,
//   cache: new InMemoryCache(),
// });

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
