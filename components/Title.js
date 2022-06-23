import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 26,
    color: Colors.primary500,
    borderWidth: 2,
    borderColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
});
