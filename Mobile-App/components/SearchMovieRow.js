import SearchMovieCard from "../components/SearchMovieCard";
import { ScrollView, View, ActivityIndicator, Text, FlatList } from "react-native";

function SearchMovieRow({ data, loading }) {

  const renderItem = ({ item, index }) => {
    return <SearchMovieCard movie={item} index={index} />;
  };

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

  if (data && data.getMoviesByTitle.length === 0) {
    return (
      <View
        style={{
          height: "100%",
          backgroundColor: "#222",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "red", fontSize: 30 }}>Movie not found</Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 140, backgroundColor: "black", minHeight: "100%" }}>
      {data && (
        <FlatList
          data={data.getMoviesByTitle}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

export default SearchMovieRow;
