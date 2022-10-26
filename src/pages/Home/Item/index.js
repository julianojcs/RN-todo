import React from 'react'
import { TouchableOpacity, Text, Switch, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../../themes";

const Item = ({ item, onChange, onDelete, onEdit, onShow }) => {
  return (
    <TouchableOpacity
      style={item.completedAt!==null ? styles.taskCompleted: styles.taskNotCompleted}
      onPress={() => onShow(item)}>
      <Switch
        style={styles.switch}
        onValueChange={onChange}
        value={item.completedAt!==null}
      />
      <Text
        style={[styles.titleText]}
        numberOfLines={2}>
        {item.title}
      </Text>
      {item.completedAt===null && (
        <Icon
          style={[styles.icon]}
          name={"edit"}
          onPress={() => onEdit(item)}
        />
      )}
      <Icon
        style={[styles.icon]}
        name={"trash-alt"}
        onPress={() => onDelete(item)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskNotCompleted: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingEnd: 10,
    borderRadius: 8,
    overflow: "hidden",
    minHeight: 70,
    backgroundColor: colors.primary,
  },
  taskCompleted: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingEnd: 10,
    borderRadius: 8,
    overflow: "hidden",
    minHeight: 70,
    backgroundColor: colors.lightSecondary,
  },
  titleText: {
    fontSize: 20,
    fontWeights: "bold",
    paddingVertical: 10,
    paddingRight: 10,
    backgroundColor: 'transparent',
    color: colors.text,
    width: Dimensions.get('window').width -150,
  },
  icon: {
    fontSize: 24,
    padding: 5,
    alignSelf: "center",
    color: colors.danger,
    backgroundColor: 'transparent',
  },
  switch: {
    marginHorizontal: 5,
    alignSelf: "center",
  },
});

export default Item
