//https://www.apollographql.com/docs/react/get-started/


import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: process.env.REACT_APP_WEB_SERVICE_URL,
});

export default client;
