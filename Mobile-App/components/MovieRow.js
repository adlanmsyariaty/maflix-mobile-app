import { useEffect, useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

function MovieRow({ movie, genreId, index }) {
  const [imgUrl, setImgUrl] = useState();
  const [movieId, setMovieId] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    if (genreId) {
      setMovieId(movie.Movie.id);
      setImgUrl(movie.Movie.imgUrl);
    } else {
      setMovieId(movie.id);
      setImgUrl(movie.imgUrl);
    }
  }, [movie]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { movieId })}
    >
      {!genreId && (
        <LinearGradient
          colors={["transparent", "#222"]}
          style={{
            position: "absolute",
            top: 195,
            zIndex: 10000,
            width: "100%",
            marginRight: 0,
            height: 80,
          }}
        />
      )}

      <Image
        style={{
          resizeMode: "contain",
          width: genreId ? 120 : 180,
          height: genreId ? 180 : 270,
          marginTop: 5,
          marginBottom: 15,
          marginLeft: genreId ? 5 : 30,
          marginRight: genreId ? 5 : 20,
          borderRadius: genreId ? 10 : 0,
          zIndex: (index + 1) * -3,
        }}
        source={{ uri: imgUrl }}
      />

      {!genreId && (
        <View
          style={{
            position: "absolute",
            top: 95,
            left: -5,
            zIndex: (index + 1) * -3,
          }}
        >
          <Text style={{ color: "red", fontSize: 150, fontWeight: "bold" }}>
            {index + 1}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default MovieRow;
