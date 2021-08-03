import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { AppColours, useColours } from "../../styles";

export const MockeryCard = () => {
  const styles = cardStyles(useColours());
  return (
    <View style={styles.card}>
      <View>
        <Text style={{color: "black"}}>
          Categories: Yo Mama, General
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Your Mom!
        </Text>
      </View>
      <View>
        <Text style={{color: "black"}}>
          Source: Ansh's Brain
        </Text>
      </View>
      <View>
        <Text style={{color: "black"}}>
          Tags: goblin, funny
        </Text>
      </View>
    </View>
  );
}

const cardStyles = (colours: AppColours) => StyleSheet.create({
  card: {
    margin: (StatusBar.currentHeight || 50) / 2,
    padding: (StatusBar.currentHeight || 50) / 2,
    backgroundColor: colours.primary.main,
    // ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    // android
    elevation: 15
  },
  mainContent: {
  
  },
  text: {
    fontSize: 32,
    color: colours.text.main,
  },
});