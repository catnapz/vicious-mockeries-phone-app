import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: process.env['VICIOUS_MOCKERY_API_URI'],
    cache: new InMemoryCache()
});

export default client;