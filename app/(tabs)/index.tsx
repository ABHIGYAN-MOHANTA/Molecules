import React, { useState, useEffect } from "react";
import { Text, View, Pressable, ToastAndroid } from "react-native";
import { PlusCircle } from "@tamagui/lucide-icons";
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabOneScreen() {
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
  }, []);

  const navigation = useNavigation();
  const [pressStartTime, setPressStartTime] = useState(0);

  const handlePressIn = () => {
    setPressStartTime(Date.now());
  };

  const handlePressOut = () => {
    const pressDuration = Date.now() - pressStartTime;
    if (pressDuration >= 1) {
      if (!habitText) {
        ToastAndroid.show("Lets Go....", ToastAndroid.SHORT);
        navigation.navigate("habit");
      } else {
        ToastAndroid.show("Streak ++", ToastAndroid.SHORT);
        if (habitStreak === "0" || habitStreak === null) {
          setHabitStreak("1");
          AsyncStorage.setItem("habitStreak", "1");
        } else {
          const newStreak = parseInt(habitStreak) + 1;
          setHabitStreak(newStreak.toString());
          AsyncStorage.setItem("habitStreak", newStreak.toString());
        }
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "flex-start", padding: 10 }}>
        <Text
          style={{
            fontSize: 14,
            color: "black",
            backgroundColor: "gray",
            padding: 10,
            borderRadius: 14,
          }}
        >
          Tiny changes, remarkable results
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={({ pressed }) => ({
            borderColor: pressed ? "#ccc" : "#000",
            borderWidth: 32,
            borderRadius: 100,
          })}
        >
          <View
            style={{
              borderColor: "#999",
              borderWidth: 32,
              borderRadius: 100,
            }}
          >
            <PlusCircle size={40} color={"#777"} padding={30} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
