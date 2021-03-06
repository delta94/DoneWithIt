import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../Text";
import colors from "../../config/colors";

const RenderTouchable = ({ onPress, children }) => {
  if (onPress) {
    return (
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        {children}
      </TouchableHighlight>
    );
  }

  return children;
};

const RenderSwipeable = ({ rightActions, children }) => {
  if (rightActions) {
    return <Swipeable renderRightActions={rightActions}>{children}</Swipeable>;
  }

  return children;
};

const ListItem = (props) => {
  const {
    avatar,
    IconComponent,
    showChevron = false,
    title,
    subtitle,
    onPress,
    rightActions,
  } = props;

  return (
    <RenderSwipeable rightActions={rightActions}>
      <RenderTouchable onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {avatar && <Image style={styles.avatar} source={avatar} />}
          <View style={styles.contentContainer}>
            <Text numberOfLines={1}>{title}</Text>
            {subtitle && (
              <Text numberOfLines={2} style={styles.subtitle}>
                {subtitle}
              </Text>
            )}
          </View>
          {showChevron && (
            <MaterialCommunityIcons name="chevron-right" size={25} />
          )}
        </View>
      </RenderTouchable>
    </RenderSwipeable>
  );
};

ListItem.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: colors.medium,
  },
  contentContainer: {
    flexDirection: "column",
    marginLeft: 10,
    flex: 1,
  },
});

export default ListItem;
