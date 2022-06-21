import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o435j30gk401xmc3aq7e7p/master',
    cache: new InMemoryCache()
})