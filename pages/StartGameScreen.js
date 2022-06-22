import { View, TextInput, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Guess My Number</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text>Escolha um Número entre 0 e 99</Text>
        <TextInput style={styles.numberInput} maxLength={2} />
        <View style={styles.buttonsContainer}>
          <PrimaryButton>Reset</PrimaryButton>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingTop: 30,
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    alignItems: "center",
  },
  numberInput: {
    heigth: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  title: {
    fontSize: 26,
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 8,
    textAlign: "center",
    width: 260,
  },
  inputContainer: {
    backgroundColor: "#72063c",
    color: "white",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 30,
    padding: 16,
    elevation: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
