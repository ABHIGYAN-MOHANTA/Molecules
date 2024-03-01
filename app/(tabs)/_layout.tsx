import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Text } from "tamagui";
import { Button } from "tamagui";
import { Home } from "@tamagui/lucide-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Text>Hello</Text>,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                <Button icon={Home}></Button>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <Text>Hello!</Text>,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Tab Three",
          tabBarIcon: ({ color }) => <Text>Hello!</Text>,
        }}
      />
    </Tabs>
  );
}
