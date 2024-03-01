import React, { useState, useEffect } from "react";
import { View } from "tamagui";
import { Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";

export default function TabTwoScreen() {
  const [habitText, setHabitText] = useState("");
  const [habitStreak, setHabitStreak] = useState("");

  useEffect(() => {
    // Fetch the habit string from AsyncStorage when the component mounts
    const fetchHabit = async () => {
      try {
        const habitString = await AsyncStorage.getItem("habitString");
        console.log("habitString", habitString);
        const habitStreak = await AsyncStorage.getItem("habitStreak");
        console.log("habitStreak", habitStreak);

        if (habitString !== null) {
          setHabitText(habitString);
        }
        if (habitStreak !== null) {
          setHabitStreak(habitStreak);
        }
      } catch (error) {
        console.error("Error retrieving habit:", error);
      }
    };
    fetchHabit();
  }, [habitText, habitStreak]);

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <View style={styles.card}>
        <Text style={styles.text}>{habitText}</Text>
        <Text style={styles.text}>Streak: {habitStreak}</Text>
      </View>
      <View alignItems="center" justifyContent="center">
        <TextInput
          multiline
          style={{
            color: "black",
            marginTop: 20,
            fontSize: 20,
            backgroundColor: "grey",
            padding: 10,
            borderRadius: 8,
            flexWrap: "wrap",
          }}
          placeholder="Occasionally we'll ask you to reflect on your habits. Use this information to make adjustments or keep your progress strong!"
        />
      </View>
    </View>
  );
}

const styles = {
  card: {
    backgroundColor: "grey",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: "#000",
    marginBottom: 8,
  },
};
