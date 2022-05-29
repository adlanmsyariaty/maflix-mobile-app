import MovieRow from "./MovieRow";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { GET_MOVIES } from "../queries/movie";
import { useQuery } from "@apollo/client";

function MovieCategory() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  const renderItem = ({ item, index }) => {
    if (index < 9) {
      return (
        <MovieRow movie={item} index={index} />
      );
    }
  }

  return (
    <View
      style={{
        backgroundColor: "#222",
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "left",
          fontSize: 20,
          fontWeight: "bold",
          paddingLeft: 10,
          paddingTop: 5,
        }}
      >
        TOP RATED
      </Text>
      {data && (
        <FlatList
          horizontal={true}
          data={data.getMovies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

export default MovieCategory;
