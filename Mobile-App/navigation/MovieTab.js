import Home from "../screens/Home.js";
import Landing from "../screens/Landing.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { getPageStatus } from "../store/actions/utilityAction";

function MovieTab() {
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "Landing") {
            iconName = focused ? "ios-film-sharp" : "ios-film-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: "#171717",
          borderTopWidth: 0,
          paddingHorizontal: 5,
          height: 50,
          paddingTop: 5,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            navigation.navigate(route.name)
            dispatch(getPageStatus('landing'))
          },
        })}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            navigation.navigate(route.name)
            dispatch(getPageStatus('home'))
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default MovieTab;
