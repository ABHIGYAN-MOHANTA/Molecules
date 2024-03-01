import { Text, View, XStack } from "tamagui";
import { TextInput, ToastAndroid } from "react-native";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ModalScreen() {
  const navigation = useNavigation();
  const [habitText1, setHabitText1] = useState("");
  const [habitText2, setHabitText2] = useState("");
  const [habitText3, setHabitText3] = useState("");
  const handleCreateHabit = async () => {
    try {
      // Combine the habit text into a single string
      const habitText = `I will ${habitText1}, ${habitText2} so that I can become ${habitText3}`;
      // Store the habit string in local storage
      await AsyncStorage.setItem("habitString", habitText);
      const habitStreak = "0";
      await AsyncStorage.setItem("habitStreak", habitStreak);
      ToastAndroid.show("Habit Created" + `${habitText}`, ToastAndroid.SHORT);
      navigation.navigate("index");
    } catch (error) {
      console.error("Error storing habit:", error);
    }
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View flex={1} alignItems="flex-start" paddingHorizontal={14}>
        <Text fontSize={20} marginTop={10}>
          Define your Habit
        </Text>
        <Text>
          An atomic habit is a regular practice that is small and easy to do,
          and can make a remarkable difference in your life.
        </Text>
        <Text fontSize={20} marginTop={10}>
          Get Specific
        </Text>
        <Text>
          Setting an exact time and place means not waiting arounf for
          inspiration to strike
        </Text>
        <Text fontSize={20} marginTop={10}>
          Ground it in an identity
        </Text>
        <Text>
          The ultimate form of motivation is when a habit becomes part of who
          you are
        </Text>
        <View alignItems="center" justifyContent="center" margin={50}>
          <KeyboardAvoidingView behavior="height">
            <XStack flexWrap="wrap" alignItems="center">
              <Text fontSize={20}>I will </Text>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="meditate for 5 mins"
                placeholderTextColor={"grey"}
                onChangeText={(text) => setHabitText1(text)}
              />
              <Text fontSize={20}>,</Text>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="when I wake up"
                placeholderTextColor={"grey"}
                onChangeText={(text) => setHabitText2(text)}
              />
              <Text fontSize={20}>so that I can become </Text>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="a mindfull person"
                placeholderTextColor={"grey"}
                onChangeText={(text) => setHabitText3(text)}
              />
            </XStack>
          </KeyboardAvoidingView>
          <TouchableOpacity
            onPress={handleCreateHabit}
            style={{ marginTop: 20 }}
          >
            <View
              style={{ backgroundColor: "grey", padding: 10, borderRadius: 10 }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Create Habit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
