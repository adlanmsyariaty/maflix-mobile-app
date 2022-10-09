import MovieTab from "../navigation/MovieTab.js";
import Detail from "../screens/Detail.js";
import Search from "../screens/Search.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function MainStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MovieTab"
        component={MovieTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
