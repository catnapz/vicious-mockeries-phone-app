import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './api/apollo-client';
import { AppColours, useColours } from './styles';
import { MockeryCard } from './components';

const App = () => {
  const styles = appStyles(useColours());
  const isDarkMode = useColorScheme() === 'dark';

  const [expandedCardId, setExpandedCardId] = useState<number>();

  return (
    <ApolloProvider client={client}>
      <View>
        <Text style={{ textAlign: 'center', color: 'pink' }}>Header</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        indicatorStyle={isDarkMode ? 'white' : 'black'}
      >
        <MockeryCard cardId={1} isExpanded={expandedCardId === 1} onPressed={(cardId: number) => setExpandedCardId(cardId)}/>
        <MockeryCard cardId={2} isExpanded={expandedCardId === 2} onPressed={(cardId: number) => setExpandedCardId(cardId)}/>
      </ScrollView>
      <View>
        <Text style={{ textAlign: 'center', color: 'pink' }}>Footer</Text>
      </View>
    </ApolloProvider>
  );
};

const appStyles = (colours: AppColours) =>
  StyleSheet.create({
    scrollView: {
      flexGrow: 1,
      backgroundColor: colours.primary.lighter,
    },
  });

export default App;
