import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function GenreList({ genres }) {
  return (
    <>
      {genres &&
        genres.map((genre, index) => (
          <View
            key={genre.id}
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                }}
              >
                {genre.name}
              </Text>
            </View>
            <View style={{ marginRight: 10, marginLeft: 10 }}>
              {index !== genres.length - 1 && (
                <FontAwesome5
                  name="grip-lines-vertical"
                  size={20}
                  color="white"
                />
              )}
            </View>
          </View>
        ))}
    </>
  );
}

export default GenreList;
