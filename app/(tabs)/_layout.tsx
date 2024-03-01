import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Home, BarChart2, Book, DraftingCompass } from "@tamagui/lucide-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "$gray10",
        tabBarLabelStyle: { color: "gray" },
        headerStyle: {
          backgroundColor: "gray",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Molecules",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
          headerRight: () => (
            <Link href="/about" asChild>
              <Pressable>
                <DraftingCompass size={24} marginRight={10} color={"$gray1"} />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Progress",
          tabBarIcon: ({ color }) => <BarChart2 size={24} color={color} />,
          headerRight: () => (
            <Link href="/about" asChild>
              <Pressable>
                <DraftingCompass size={24} marginRight={10} color={"$gray1"} />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Mindset",
          tabBarIcon: ({ color }) => <Book size={24} color={color} />,
          headerRight: () => (
            <Link href="/about" asChild>
              <Pressable>
                <DraftingCompass size={24} marginRight={10} color={"$gray1"} />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
