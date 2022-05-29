import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import MainStack from "./navigation/MainStack.js";
import NavigationBar from "./components/NavigationBar.js";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloClient.js";
import { Provider } from "react-redux";
import store from "./store/index.js";

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar style="light" />
          <View style={styles.container}>
            <NavigationBar />
            <MainStack />
          </View>
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 1)",
    color: "white",
  },
  scrollView: {
    backgroundColor: "#222",
    padding: 20,
  },
  text: {
    fontSize: 42,
    color: "black",
    marginBottom: 50,
  },
});
