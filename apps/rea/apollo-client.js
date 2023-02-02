import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql",
    cache: new InMemoryCache(),
});

export default client;