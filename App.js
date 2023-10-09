import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View
          style={{
            padding: 16,
            backgroundColor: "green",
          }}
        >
          <Text>Search</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
          }}
        >
          <Text>Our React Native Blank Canvas</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
