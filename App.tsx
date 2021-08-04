import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './api/apollo-client';
import { AppColours, useColours } from './styles';
import { MockeryCard } from './components';

const App = () => {
  const styles = appStyles(useColours());

  return (
    <ApolloProvider client={client}>
      <View><Text style={{ textAlign: "center", color: "pink" }}>Header</Text></View>
      <ScrollView style={styles.scrollView}>
        <MockeryCard />
        <MockeryCard />
        <MockeryCard />
      </ScrollView>
      <View><Text style={{ textAlign: "center", color: "pink" }}>Footer</Text></View>
    </ApolloProvider>
  );
};

const appStyles = (colours: AppColours) => StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: colours.primary.lighter,
  }
});

export default App;


