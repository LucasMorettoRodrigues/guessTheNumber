import { View, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View>
      <Text style={styles.button}>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    color: "white",
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    width: 140,
    textAlign: "center",
    margin: 5,
  },
});
