import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary800 }}
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    backgroundColor: Colors.primary700,
    margin: 5,
    width: 140,
    elevation: 5,
    overflow: "hidden",
  },
  button: {
    fontSize: 18,
    color: "white",
    paddingVertical: 10,
    textAlign: "center",
  },
});
