import MovieRow from "../components/MovieRow";
import { useEffect, useState } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { GET_MOVIES_BY_GENRE } from "../queries/movie";
import { useQuery } from "@apollo/client";

function MovieCategory({ genre }) {
  const { loading, error, data } = useQuery(GET_MOVIES_BY_GENRE, {
    variables: {
      getMovieByGenreId: +genre.id,
    },
  });

  const renderItem = ({ item, index }) => (
    <MovieRow movie={item} index={index} genreId={genre.id} />
  );

  return (
    <View
      style={{
        backgroundColor: "#222",
      }}
    >
      {data && data.getMoviesByGenre.length !== 0 && (
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
          {genre.name} Movie
        </Text>
      )}

      {genre && data && (
        <FlatList
          horizontal={true}
          data={data.getMoviesByGenre}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

export default MovieCategory;
