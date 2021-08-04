import React from 'react';
import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AppColours, raisedEffect, useColours} from '../../styles';
import {TagsContainer} from './tags-container';

export const MockeryCard = () => {
  const colours = useColours();
  const styles = cardStyles(colours);

  const onPressedIn = () => {};

  const onPressed = () => {};

  return (
    <Pressable
      android_ripple={{borderless: true, color: colours.secondary.main}}
      onPressIn={onPressedIn}
      onPress={onPressed}>
      <View style={styles.card}>
        <View>
          <Text style={{color: 'black'}}>Categories: Yo Mama, General</Text>
        </View>
        <View>
          <Text style={styles.text}>Your Mom!</Text>
        </View>
        <TagsContainer />
        <View>
          <Text style={{color: 'black'}}>Source: Ansh's Brain</Text>
        </View>
      </View>
    </Pressable>
  );
};

const cardStyles = (colours: AppColours) =>
  StyleSheet.create({
    card: {
      margin: (StatusBar.currentHeight || 50) / 2,
      padding: (StatusBar.currentHeight || 50) / 2,
      backgroundColor: colours.primary.main,
      ...raisedEffect,
    },
    text: {
      fontSize: 32,
      color: colours.text.main,
    },
  });
