import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontAwesome,
  AntDesign,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPageStatus } from "../store/actions/utilityAction";
import { GET_MOVIES } from "../queries/movie";
import { useQuery } from "@apollo/client";
import HomeMovieRow from "../components/HomeMovieRow";

function Landing() {
  const [subsOption, setSubsOption] = useState("month");
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_MOVIES);

  useEffect(() => {
    dispatch(getPageStatus("landing"));
  }, []);

  const renderItem = ({ item, index }) => {
    return <HomeMovieRow movie={item} index={index} />;
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

  return (
    <>
      <ScrollView>
        <ImageBackground
          source={{
            uri: "https://wallup.net/wp-content/uploads/2016/01/254126-portrait_display-digital_art-abstract-CGI-smoke-simple-minimalism-black_background.jpg",
          }}
          resizeMode="cover"
          style={{
            flex: 1,
            backgroundColor: "#222",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 100,
            minHeight: "100%",
          }}
        >
          <View
            style={{
              flex: 1,
              paddingLeft: 0,
              paddingRight: 0,
              marginBottom: 10,
              width: "100%",
            }}
          >
            <View
            >
              {data && (
                <FlatList
                  horizontal={true}
                  data={data.getMovies}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              )}
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: 20,
              paddingRight: 20,
              marginBottom: 20,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 26,
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              The Home of Global & Indonesian Movies and Series
            </Text>
            <View style={{ flex: 1, paddingTop: 20, width: "100%" }}>
              <LinearGradient
                colors={["#b91c1c", "#1c1917"]}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "auto",
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="circle" size={12} color="#a3a3a3" />
                    </View>
                    <View style={{ flex: 6, justifyContent: "flex-start" }}>
                      <Text
                        style={{
                          color: "#a3a3a3",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Global blockbusters from Disney, Marvel, Pixar, Star
                        Wars and more
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "auto",
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="circle" size={12} color="#a3a3a3" />
                    </View>
                    <View style={{ flex: 6, justifyContent: "flex-start" }}>
                      <Text
                        style={{
                          color: "#a3a3a3",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Indonesian movies and series
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "auto",
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="circle" size={12} color="#a3a3a3" />
                    </View>
                    <View style={{ flex: 6, justifyContent: "flex-start" }}>
                      <Text
                        style={{
                          color: "#a3a3a3",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Never-before-seen Maflix+ Originals
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "auto",
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="circle" size={12} color="#a3a3a3" />
                    </View>
                    <View style={{ flex: 6, justifyContent: "flex-start" }}>
                      <Text
                        style={{
                          color: "#a3a3a3",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Visit FAQ page to find out Maflix+ Hotstar special
                        offers from various partners
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ flex: 2, marginTop: 20 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "auto",
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginRight: 5,
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <Ionicons name="ios-infinite" size={24} color="white" />
                      </View>
                      <View style={{ flex: 3 }}>
                        <Text style={{ color: "white", fontSize: 16 }}>
                          Watch on the go
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginLeft: 5,
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <AntDesign name="playcircleo" size={24} color="white" />
                      </View>
                      <View style={{ flex: 3 }}>
                        <Text style={{ color: "white", fontSize: 16 }}>
                          Across Platforms and more
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "auto",
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginRight: 5,
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <Feather name="monitor" size={24} color="white" />
                      </View>
                      <View style={{ flex: 3 }}>
                        <Text style={{ color: "white", fontSize: 16 }}>
                          Multiple Devices
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginLeft: 5,
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <FontAwesome name="language" size={24} color="white" />
                      </View>
                      <View style={{ flex: 3 }}>
                        <Text style={{ color: "white", fontSize: 16 }}>
                          Subs/Dubs in Bahasa Indonesia
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "auto",
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginRight: 5,
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <Ionicons
                          name="pricetags-outline"
                          size={24}
                          color="white"
                        />
                      </View>
                      <View style={{ flex: 3 }}>
                        <Text style={{ color: "white", fontSize: 16 }}>
                          Commercial Free
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginLeft: 5,
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <MaterialCommunityIcons
                          name="dolby"
                          size={24}
                          color="white"
                        />
                      </View>
                      <View style={{ flex: 3 }}>
                        <Text style={{ color: "white", fontSize: 16 }}>
                          Dolby Audio
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ flex: 2, marginTop: 20 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "auto",
                      marginBottom: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setSubsOption("month")}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginRight: 5,
                        borderColor: "white",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 10,
                      }}
                    >
                      <View style={{ flex: 3 }}>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              color: "red",
                              fontSize: 16,
                              fontStyle: "italic",
                            }}
                          >
                            Maflix+
                          </Text>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 14,
                              fontStyle: "italic",
                            }}
                          >
                            Rp 39.000/Month
                          </Text>
                        </View>
                      </View>
                      <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        {subsOption === "month" && (
                          <Ionicons
                            name="checkmark-done-sharp"
                            size={24}
                            color="white"
                          />
                        )}
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setSubsOption("year")}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginLeft: 5,
                        borderColor: "white",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 10,
                      }}
                    >
                      <View style={{ flex: 3 }}>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              color: "red",
                              fontSize: 16,
                              fontStyle: "italic",
                            }}
                          >
                            Maflix+
                          </Text>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 14,
                              fontStyle: "italic",
                            }}
                          >
                            Rp 199.000/Year
                          </Text>
                        </View>
                      </View>
                      <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        {subsOption === "year" && (
                          <Ionicons
                            name="checkmark-done-sharp"
                            size={24}
                            color="white"
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: "red",
                      borderRadius: 8,
                      height: 40,
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "white",
                      borderWidth: 2,
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 15 }}>
                      SUBSCRIBE
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}

export default Landing;
