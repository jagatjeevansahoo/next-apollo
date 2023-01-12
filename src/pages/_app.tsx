import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../graphql/apollo-client";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
