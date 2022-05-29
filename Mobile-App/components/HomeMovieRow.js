import { useEffect, useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

function HomeMovieRow({ movie, genreId, index }) {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    setImgUrl(movie.imgUrl);
  }, [movie]);

  return (
    <>
      <View
        style={{
          width: 200,
          height: 300,
          marginTop: 5,
          marginBottom: 15,
          marginLeft: 15,
          marginRight: 15,
          padding: 4,
          elevation: 15,
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            width: 200,
            height: 300
          }}
          source={{ uri: imgUrl }}
        />
      </View>
    </>
  );
}

export default HomeMovieRow;
