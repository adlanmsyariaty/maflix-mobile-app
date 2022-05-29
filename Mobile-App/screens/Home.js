import React, { useEffect } from "react";
import { ScrollView, Image, View, Text, ActivityIndicator } from "react-native";
import MovieCategory from "../components/MovieCategory";
import AllMovies from "../components/AllMovies";
import BannerButton from "../components/BannerButton";
import { LinearGradient } from "expo-linear-gradient";
import { useQuery } from "@apollo/client";
import { GET_GENRES } from "../queries/genre";
import { getPageStatus, getScrollYData } from "../store/actions/utilityAction";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { loading, error, data } = useQuery(GET_GENRES);
  const { pageStatus } = useSelector((state) => state.utility);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPageStatus("home"));
  }, []);

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: "#222",
          height: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  const handleScroll = (event) => {
    dispatch(getScrollYData(event.nativeEvent.contentOffset.y));
  };

  return (
    <>
      <ScrollView onScroll={(event) => handleScroll(event)}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              position: "absolute",
              top: 220,
              zIndex: 4,
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 50, height: 30, resizeMode: "contain" }}
              source={{
                uri: "https://i.annihil.us/u/prod/marvel/images/logo/marvel-logo.png",
              }}
            />
            <Text style={{ color: "white", marginLeft: 5, fontWeight: "bold" }}>
              Film
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 260,
              zIndex: 2,
              width: 250,
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 24,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Doctor Strange in the Multiverse of Madness
            </Text>
          </View>
        </View>

        <LinearGradient
          colors={["transparent", "#222"]}
          style={{
            position: "absolute",
            top: 210,
            zIndex: 1,
            width: "100%",
            marginRight: 10,
            height: 160,
          }}
        />
        <Image
          style={{ width: "100%", height: 370, resizeMode: "cover" }}
          source={{
            uri: "https://image.tmdb.org/t/p/original/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg",
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#222",
          }}
        >
          <Text style={{ color: "white" }}>
            Fantasy - Action - Adventure - Fighting
          </Text>
        </View>
        <BannerButton />
        <AllMovies />
        {data &&
          data.getGenres.map((genre) => (
            <MovieCategory key={genre.id} genre={genre} />
          ))}
      </ScrollView>
    </>
  );
}

export default Home;
