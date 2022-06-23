import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { Colors } from "./constants/colors";
import GameScreen from "./pages/GameScreen";
import StartGameScreen from "./pages/StartGameScreen";
import GameOverScreen from "./pages/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  const handleStartGame = (chosenNumber) => {
    setUserNumber(chosenNumber);
  };

  let screen = <StartGameScreen onConfirm={handleStartGame} />;

  const handleGameOver = () => {
    setGameIsOver(true);
  };

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  const handleRestartGame = () => {
    setUserNumber();
    setGameIsOver(false);
  };

  if (gameIsOver) {
    screen = <GameOverScreen onRestart={handleRestartGame} />;
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode={"cover"}
        style={styles.allHeight}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.allHeight}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: Colors.accent500,
    flex: 1,
  },
  allHeight: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
