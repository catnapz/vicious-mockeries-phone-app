import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppColours, raisedEffect, useColours } from "../../styles";

interface TagProps {
  name: string
}

export const Tag = (props: TagProps) => {
  const styles = tagStyles(useColours());
  
  return (
    <View style={styles.tag}>
      <Text style={styles.text} numberOfLines={1}>
        {props.name}
      </Text>
    </View>
  )
}

const tagStyles = (colours: AppColours) => StyleSheet.create({
  tag: {
    minWidth: 50,
    padding: 5,
    marginRight: 2.5,
    marginBottom: 2.5,
    borderRadius: 15,
    backgroundColor: colours.primary.darker,
    alignItems: "center",
    ...raisedEffect
  },
  text: {
    flex: 1,
    fontSize: 12,
    color: colours.text.main,
    
  },
});