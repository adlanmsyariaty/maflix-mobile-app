import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import GenreList from "../components/GenreList";
import { MaterialIcons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { GET_MOVIE_DETAIL } from "../queries/movie";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { getPageStatus } from "../store/actions/utilityAction";

function Detail({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { loading, error, data } = useQuery(GET_MOVIE_DETAIL, {
    variables: {
      getMovieId: route.params.movieId,
    },
  });
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPageStatus("detail"))
  }, [])

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

  return (
    <>
      <View
        style={{
          height: 340,
          width: "100%",
          backgroundColor: "#222",
          margin: 0,
          paddingTop: 80,
        }}
      >
        <View
          style={{
            color: "black",
            zIndex: 1,
            backgroundColor: "rgba(255, 0, 0, 0.7)",
            padding: 3,
            fontWeight: "bold",
            position: "absolute",
            top: 290,
            margin: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 5,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              margin: 0,
              padding: 0,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Preview
          </Text>
        </View>
        <WebView
          style={{ margin: 0, padding: 0 }}
          source={{
            html: `<iframe width="100%" height="100%" style="-webkit-transform:scale(1.04);-moz-transform-scale(1.016)" src="${data.getMovie.trailerUrl}?autoplay=1" allow="autoplay" frameborder="0" allowfullscreen></iframe>`,
          }}
        />
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "#222" }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              padding: 0,
              fontWeight: "bold",
              fontSize: 24,
              marginTop: 5,
            }}
          >
            {data.getMovie.title}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginBottom: 10,
            marginTop: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginBottom: 10,
              marginTop: 10,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "#a3a3a3", paddingLeft: 10, marginRight: 10 }}
            >
              2021
            </Text>
            <Text
              style={{
                color: "#a3a3a3",
                padding: 2,
                backgroundColor: "#404040",
                borderRadius: 2,
                marginRight: 10,
              }}
            >
              16+
            </Text>
            <Text style={{ color: "#a3a3a3", padding: 2, marginRight: 10 }}>
              2h 33m
            </Text>
            <MaterialIcons name="hd" size={26} color="gray" />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "red",
              justifyContent: "flex-end",
              padding: 5,
              borderRadius: 5,
              marginRight: 10,
            }}
          >
            <FontAwesome name="thumbs-up" size={24} color="white" />
            <Text
              style={{ color: "white", marginLeft: 10, fontWeight: "bold" }}
            >
              Rate
            </Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "left",
              color: "white",
              paddingLeft: 10,
              fontWeight: "bold",
              textAlign: "justify",
              fontSize: 16,
              color: "red",
            }}
          >
            Synopsis
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: "white",
              padding: 10,
              fontWeight: "bold",
              textAlign: "justify",
              fontSize: 14,
            }}
          >
            {data.getMovie.synopsis}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "left",
              color: "white",
              paddingLeft: 10,
              fontWeight: "bold",
              textAlign: "justify",
              fontSize: 16,
              color: "red",
            }}
          >
            Rating
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: "white",
              paddingLeft: 10,
              paddingTop: 5,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                {data.getMovie.rating &&
                  [...new Array(data.getMovie.rating)].map((star, index) => (
                    <FontAwesome
                      key={index + 1}
                      name="star"
                      size={14}
                      color="yellow"
                      style={{ marginRight: 5, marginTop: 0 }}
                    />
                  ))}
                {data.getMovie.rating &&
                  [...new Array(10 - data.getMovie.rating)].map(
                    (star, index) => (
                      <FontAwesome
                        key={index + 1}
                        name="star-o"
                        size={14}
                        color="yellow"
                        style={{ marginRight: 5, marginTop: 0 }}
                      />
                    )
                  )}
              </View>
              <Text
                style={{
                  textAlign: "left",
                  color: "white",
                  padding: 10,
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                [{data.getMovie.rating}/10]
              </Text>
            </View>
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "left",
              color: "white",
              paddingLeft: 10,
              fontWeight: "bold",
              textAlign: "justify",
              fontSize: 16,
              color: "red",
              marginBottom: 10,
            }}
          >
            Genre
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: "white",
              paddingLeft: 10,
              paddingTop: 5,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            <GenreList genres={data.getMovie.Genres} />
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "left",
              color: "white",
              paddingLeft: 10,
              fontWeight: "bold",
              textAlign: "justify",
              fontSize: 16,
              color: "red",
              marginBottom: 10,
              marginTop: 15,
            }}
          >
            Author
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: "white",
              paddingLeft: 10,
              paddingTop: 5,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {data.getMovie.User.username}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                padding: 10,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "black",
                fontWeight: "bold",
                fontSize: 20,
                color: "red",
                marginBottom: 15,
                marginTop: 15,
                backgroundColor: "red",
                color: "white",
                width: "95%",
              }}
            >
              View Movie Cast
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onBackdropPress={() => console.log(sdfkjshfk)}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableWithoutFeedback activeOpacity={1} onPressOut={() => setModalVisible(!modalVisible)}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  textAlign: "left",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 20,
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  height: "100%"
                }}
              >
                {data.getMovie.Casts &&
                  data.getMovie.Casts.map((cast) => (
                    <View
                      key={cast.id}
                      style={{
                        width: 120,
                        height: 150,
                        margin: 5,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          margin: 0,
                          padding: 10,
                        }}
                      >
                        {cast.name}
                      </Text>

                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                          }}
                          source={{
                            uri: cast.profilePict,
                          }}
                        />
                      </View>
                    </View>
                  ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    position: "absolute",
    width: '100%',
    bottom: 0,
    backgroundColor: "#525252",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Detail;
