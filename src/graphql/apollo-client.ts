import { ApolloClient, InMemoryCache } from "@apollo/client";

const endPoint = process.env.GRAPHQL_ENDPOINT as string;
const client = new ApolloClient({
  // uri: "https://countries.trevorblades.com",
  uri: endPoint,
  cache: new InMemoryCache(),
});

export default client;
