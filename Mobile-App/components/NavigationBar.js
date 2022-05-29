import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { getPageStatus } from "../store/actions/utilityAction";
import { FontAwesome } from "@expo/vector-icons";

function NavigationBar() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { scrollY, pageStatus } = useSelector((state) => state.utility);
  const dispatch = useDispatch();
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(pageStatus);
  }, [pageStatus]);

  useEffect(() => {
    if (scrollY > 60) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 60,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 60,
        useNativeDriver: true,
      }).start();
    }
  }, [scrollY]);

  return (
    <>
      <Animated.View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: `rgba(0, 0, 0, 0.75)`,
          position: "absolute",
          height: 85,
          zIndex: 1,
          top: 0,
          left: 0,
          width: "100%",
          flex: 1,
          justifyContent: "space-between",
          opacity: status === "home" ? fadeAnim : 1,
        }}
      ></Animated.View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          marginTop: 40,
          position: "absolute",
          zIndex: 2,
        }}
      >
        {(status === "home" || status === "landing") && (
          <TouchableOpacity
            onPress={() => {
              dispatch(getPageStatus("landing"));
              navigation.navigate("Landing");
            }}
          >
            <Text
              style={{
                fontSize: 23,
                textAlign: "center",
                color: "red",
                paddingLeft: 10,

                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              MAFLIX
            </Text>
          </TouchableOpacity>
        )}

        {(status === "detail" || status === "search") && (
          <TouchableOpacity
            onPress={() => {
              dispatch(getPageStatus("home"));
              navigation.navigate("Home");
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="arrow-back-outline" size={30} color="white" />
            </View>
          </TouchableOpacity>
        )}

        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          {status !== "search" && (
            <TouchableOpacity
              onPress={() => {
                dispatch(getPageStatus("search"));
                navigation.navigate("Search");
              }}
            >
              <FontAwesome name="search" size={24} color="white" />
            </TouchableOpacity>
          )}

          <Image
            style={{
              resizeMode: "contain",
              width: 25,
              height: 25,
              marginRight: 10,
              marginLeft: 20,
            }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
            }}
          />
        </View>
      </View>
    </>
  );
}

export default NavigationBar;
