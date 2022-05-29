import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function SearchMovieCard({ movie }) {
  const [movieId, setMovieId] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    setMovieId(movie.id);
  }, [movie]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { movieId })}
    >
      <View
        style={{
          width: "100%",
          height: 120,
          marginBottom: 1,
          marginTop: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "100%",
            backgroundColor: "#222",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 120, width: 80, resizeMode: "contain" }}
            source={{ uri: movie.imgUrl }}
          />
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <Text
              style={{
                color: "white",
                textAlign: "left",
                marginLeft: 10,
                fontSize: 16,
              }}
            >
              {movie.title}
            </Text>
          </View>

          <TouchableOpacity onPress={() => Linking.openURL(movie.trailerUrl)}>
            <View style={{ marginRight: 30, width: "100%", height: "100%", flex: 1, justifyContent: "center", alignItems: "center" }}>
              <AntDesign name="playcircleo" size={24} color="white" />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </TouchableOpacity>
  );
}

export default SearchMovieCard;
