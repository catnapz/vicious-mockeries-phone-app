import React from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { AppColours, raisedEffect, useColours } from '../../styles';
import { TagsContainer } from './tags-container';

interface IMockeryCardProps {
  cardId: number;
  isExpanded: boolean;
  onPressed: (cardId: number) => void;
}

export const MockeryCard = (props: IMockeryCardProps) => {
  const colours = useColours();
  const styles = cardStyles(colours);

  return (
    <Pressable
      android_ripple={{ borderless: true, color: colours.secondary.main }}
      onPress={() => props.onPressed(props.cardId)}>
      <View style={styles.card}>

        <Collapsible collapsed={!props.isExpanded}  align="top">
          <View>
            <Text style={{ color: 'black' }}>Categories: Yo Mama, General</Text>
          </View>
        </Collapsible>

        <View>
          <Text style={styles.text}>Your Mom!</Text>
        </View>

        <Collapsible collapsed={!props.isExpanded} align="bottom">
            <TagsContainer />
            <View>
              <Text style={{ color: 'black' }}>Source: Ansh's Brain</Text>
            </View>
        </Collapsible>

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
