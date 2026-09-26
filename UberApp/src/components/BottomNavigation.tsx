import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { sTabBar } from "./TabBarPlaceholder"; //learned how to import from chatgpt
export const BottomNavigation = () => {
  return (
    <View style={sTabBar.c}>
      <Pressable style={[s.t, sTabBar.button]}>
        <Image
          style={sTabBar.image}
          source={require("../../assets/images/home.png")}
        />
      </Pressable>

      <Pressable style={[s.t, sTabBar.button]}>
        <Image
          style={sTabBar.image}
          source={require("../../assets/images/map.png")}
        />
      </Pressable>

      <Pressable style={[s.t, sTabBar.button]}>
        <Image
          style={sTabBar.image}
          source={require("../../assets/images/search.png")}
        />
        <Text>Search</Text>
      </Pressable>

      <Pressable style={[s.t, sTabBar.button]}>
        <Image
          style={sTabBar.image}
          source={require("../../assets/images/cart.png")}
        />
      </Pressable>

      <Pressable style={[s.t, sTabBar.button]}>
        <Image
          style={sTabBar.image}
          source={require("../../assets/images/profile.png")}
        />
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  t: { flex: 1, padding: 1, alignItems: "center" },
});
