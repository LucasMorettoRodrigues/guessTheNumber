import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

const generateRandomNumber = (min, max, exclude) => {
  let randomNumber = Math.floor(
    Math.random() * (maxValue - minValue) + minValue
  );

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minValue = 1;
let maxValue = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const inicialGuest = generateRandomNumber(minValue, maxValue, userNumber);
  const [guessedNumber, setGuessedNumber] = useState(inicialGuest);

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && guessedNumber < userNumber) ||
      (direction === "higher" && guessedNumber > userNumber)
    ) {
      Alert.alert("Don't lie!", "Try again.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxValue = guessedNumber;
    } else {
      minValue = guessedNumber + 1;
    }

    console.log(minValue, maxValue);

    let newRandomNumber = generateRandomNumber(
      minValue,
      maxValue,
      guessedNumber
    );

    console.log(minValue, maxValue);

    setGuessedNumber(newRandomNumber);

    if (newRandomNumber == userNumber) {
      minValue = 1;
      maxValue = 100;
      onGameOver();
    }
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Guess: {guessedNumber}</Text>
        <Text style={styles.text}>Higher or Lower?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={() => handleNextGuess("lower")}>
          <Ionicons name={"md-remove"} size={24} color={"white"} />
        </PrimaryButton>
        <PrimaryButton onPress={() => handleNextGuess("higher")}>
          <Ionicons name={"md-add"} size={24} color={"white"} />
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
  textContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    margin: 10,
  },
  titleContainer: {
    alignItems: "center",
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
