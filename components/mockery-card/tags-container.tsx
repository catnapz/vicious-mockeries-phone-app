import React from "react";
import { StyleSheet, View } from "react-native";
import { AppColours, useColours } from "../../styles";
import { Tag } from "../tag";

export const TagsContainer = () => {

  const styles = tagsContainerStyles(useColours());

  const tags = ["goblin", "funny", "X", "XX", "XXX", "XXXX", "XXXXX"];
  
  const renderTags = () => tags.map((tag, idx) => (
    <Tag key={idx} name={tag} />
  ));

  return (
    <View style={styles.container}>
      {renderTags()}
    </View>
  )
}

const tagsContainerStyles = (colours: AppColours) => StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 12,
    color: colours.text.main,
  },
});