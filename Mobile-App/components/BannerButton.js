import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from "react-native";

function BannerButton() {
  return (
    <View
      style={{
        backgroundColor: "#222",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 3,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 30,
        }}
      >
        <Ionicons name="add" size={20} color="white" />
        <Text
          style={{
            flex: 1,
            color: "white",
            textAlign: "center",
            marginTop: 5,
            fontSize: 10,
          }}
        >
          My List
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "white",
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="play" size={20} color="black" />
        <Text style={{ color: "black", marginLeft: 10, fontWeight: "bold" }}>
          Play
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 3,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 30,
        }}
      >
        <AntDesign name="infocirlceo" size={20} color="white" />
        <Text
          style={{
            flex: 1,
            color: "white",
            textAlign: "center",
            marginTop: 5,
            fontSize: 10,
          }}
        >
          Info
        </Text>
      </View>
    </View>
  );
}

export default BannerButton;
