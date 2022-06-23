import { View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameOverScreen = ({ onRestart }) => {
  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <PrimaryButton onPress={onRestart}>Play Again!</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
});
