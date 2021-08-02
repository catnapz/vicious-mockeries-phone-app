import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { ApolloProvider } from '@apollo/client';

import client from "./api/apollo-client";

const App = () => {

  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <Text>Hello World</Text>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
