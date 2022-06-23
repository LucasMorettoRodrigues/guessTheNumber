import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { Colors } from "../constants/colors";

const StartGameScreen = ({ onConfirm }) => {
  const [enteredNumber, setEnteredNumber] = useState();

  const resetInputNumber = () => {
    setEnteredNumber("");
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      return Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputNumber }]
      );
    }

    onConfirm(enteredNumber);
  };

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Enter a number between 0 and 99</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={(value) => setEnteredNumber(value)}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    color: Colors.primary500,
    borderWidth: 2,
    borderColor: Colors.primary500,
    padding: 8,
    textAlign: "center",
    width: 260,
  },
  inputText: {
    color: "white",
    fontSize: 18,
    marginBottom: 5,
  },
  numberInput: {
    width: 50,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: Colors.primary500,
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
