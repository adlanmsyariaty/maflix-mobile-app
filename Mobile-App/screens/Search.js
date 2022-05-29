import { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { getPageStatus } from "../store/actions/utilityAction";
import { useQuery } from "@apollo/client";
import { GET_MOVIES_BY_TITLE } from "../queries/movie";
import SearchMovieRow from "../components/SearchMovieRow";
import { useDebounce } from "../hooks/useDebounce";

function Search() {
  const [searchText, setSearchText] = useState();
  const [debouncedMovie] = useDebounce(searchText, 750);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPageStatus("search"));
  }, []);

  const saveSearchText = (text) => {
    setSearchText(text);
  };

  const { loading, error, data } = useQuery(GET_MOVIES_BY_TITLE, {
    variables: {
      title: debouncedMovie,
    },
  });

  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 0,
          height: 125,
          zIndex: 1,
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <View style={{ backgroundColor: "black", marginTop: 80 }}>
          <TextInput
            style={{
              color: "white",
              backgroundColor: "gray",
              marginTop: 10,
              marginBottom: 10,
              height: 40,
              padding: 10,
            }}
            onChangeText={(text) => saveSearchText(text)}
            value={searchText}
            placeholder="Search Movie By Title . . ."
            placeholderTextColor="white"
          />
        </View>
      </View>
      <SearchMovieRow data={data} loading={loading} />
    </>
  );
}

export default Search;
