import { Text, View, ScrollView } from "tamagui";
import { Twitter, Instagram, Youtube, Chrome } from "@tamagui/lucide-icons";
import { Link } from "expo-router";

export default function ModalScreen() {
  return (
    <ScrollView flex={1}>
      <View
        flex={1}
        alignItems="center"
        justifyContent="center"
        paddingHorizontal={14}
      >
        <Text fontSize={40} marginTop={10}>
          Molecules
        </Text>
        <Text color={"$color10"} textAlign="center">
          Welcome to Molecules - Your Path to Atomic Habits. At Molecules, we
          believe in the transformative power of habits. Inspired by James
          Clear's groundbreaking book "Atomic Habits," we've created a platform
          dedicated to helping you build small habits that lead to remarkable
          results.
        </Text>
        <Text fontSize={17} color={"$color11"}>
          Why Molecules?
        </Text>
        <Text color={"$color10"} textAlign="center">
          Just like atoms are the building blocks of matter, habits are the
          building blocks of your life. By focusing on the small, consistent
          actions—the "molecules" of behavior—you can create meaningful change
          over time. Molecules empowers you to identify, track, and reinforce
          these tiny habits, turning them into catalysts for personal growth and
          success.
        </Text>
        <Text fontSize={17} color={"$color11"}>
          Join the Molecules Community
        </Text>
        <Text color={"$color10"} textAlign="center">
          Comming soon... Ready to start your journey towards a better you? Join
          thousands of others in the Molecules community who are committed to
          unlocking their full potential. Whether you're a seasoned habit
          enthusiast or just starting out on your habit-building journey, you'll
          find a supportive network of like-minded individuals ready to cheer
          you on.
        </Text>
        <View
          flexDirection="row"
          justifyContent="space-around"
          paddingVertical={10}
        >
          <Link href="https://twitter.com/MohantaAbhigyan" asChild>
            <Twitter size={38} marginHorizontal={7} />
          </Link>
          <Link href="https://www.instagram.com/abhigyanmohanta02/" asChild>
            <Instagram size={38} marginHorizontal={7} />
          </Link>
          <Link href="https://www.youtube.com/@abhigyanmohanta8861" asChild>
            <Youtube size={38} marginHorizontal={7} />
          </Link>
          <Link href="https://abhigyan-mohanta.vercel.app/" asChild>
            <Chrome size={38} marginHorizontal={7} />
          </Link>
        </View>
        <Text fontSize={17} color={"$color11"}>
          Our Mission
        </Text>
        <Text color={"$color10"} textAlign="center">
          Our mission is simple: to make habit formation easy, enjoyable, and
          sustainable. Whether you're striving for professional success, better
          health, or personal fulfillment, Molecules is here to support you
          every step of the way. We believe that by harnessing the power of
          small habits, you can achieve anything you set your mind to.
        </Text>
        <Text fontSize={17} color={"$color11"}>
          What Makes Us Different?
        </Text>
        <Text color={"$color10"} textAlign="center">
          Molecules is more than just a habit-tracking app. We've carefully
          designed our platform to incorporate the latest research in behavioral
          psychology, neuroscience, and habit formation. Our user-friendly
          interface, personalized recommendations, and powerful tracking tools
          make it easier than ever to build habits that stick.
        </Text>
      </View>
    </ScrollView>
  );
}
