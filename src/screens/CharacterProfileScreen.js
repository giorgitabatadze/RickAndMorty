import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import Screen from "./Screen";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
let newText;

export default function CharacterProfileScreen({ route }) {
  const species = "Species: ";
  const gender = "Gender: ";
  const location = "Location: ";
  const episode = "Episode: ";
  const status = "Status:";
  const createdTime = "createdTime: ";
  const data = route.params.data;

  const episodeData = data.episode;

  const [liked, setLiked] = useState("like2");
  const [disliked, setDisliked] = useState("dislike2");

  // useEffect(async () => {
  //   // for (let item of data.episode) {
  //   //   console.log("item", item);
  //   //   return item;
  //   // }
  //
  //   let i = 0;
  //   while (i < data.episode.length) {
  //     for (let item of data.episode.json()) {
  //       console.log("item", data.episode.json());
  //     }
  //     console.log("i", i);
  //     i++;
  //   }
  //
  //   newText = episodeData.split("\n").map((i) => {
  //     return i;
  //   });
  // });

  // console.log("episodedata", episodeData);
  // console.log("newtext", newText);

  // console.log("data12: ", route.params.data);
  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView
          style={{ marginTop: 20, width: width }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Image
            style={styles.logo}
            source={{
              uri: data.image,
            }}
          />
          <Text style={styles.charName}>{data.name}</Text>
          {/*<View style={styles.separator} />*/}
          <View style={styles.speciesViewStyle}>
            <Text style={styles.speciesStyle}>{species}</Text>
            <Text style={styles.speciesTextStyle}>{data.species}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.speciesViewStyle}>
            <Text style={styles.speciesStyle}>{gender}</Text>
            <Text style={styles.speciesTextStyle}>{data.gender}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.speciesViewStyle}>
            <Text style={styles.speciesStyle}>{location}</Text>
            <Text style={styles.speciesTextStyle}>{data.location.name}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.speciesViewStyle}>
            <Text style={styles.speciesStyle}>{episode}</Text>
            <Text style={styles.speciesTextStyle}>{data.episode}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.speciesViewStyle}>
            <Text style={styles.speciesStyle}>{status}</Text>
            <Text style={styles.speciesTextStyle}>{data.status}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.speciesViewStyle}>
            <Text style={styles.speciesStyle}>{createdTime}</Text>
            <Text style={styles.speciesTextStyle}>{data.created}</Text>
          </View>
          <View style={styles.separator} />

          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Pressable
              style={[styles.likeButtonStyle, { backgroundColor: "#add8e6" }]}
              onPress={() => setLiked((isLiked) => !isLiked)}
            >
              <AntDesign
                name={liked ? "like2" : "like1"}
                size={32}
                color={liked ? "black" : "blue"}
              />
              {/*<AntDesign*/}
              {/*    name={liked ? "like1" : "dislike1"}*/}
              {/*    size={32}*/}
              {/*    color={liked ? "black" : "red"}*/}
              {/*/>*/}
            </Pressable>
            <Pressable
              style={[
                styles.likeButtonStyle,
                { backgroundColor: "pink", marginLeft: 30 },
              ]}
              onPress={() => setDisliked((disLiked) => !disLiked)}
            >
              <AntDesign
                style={{ marginTop: 5 }}
                name={disliked ? "dislike2" : "dislike1"}
                size={32}
                color={disliked ? "black" : "red"}
              />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
  header: {
    // marginTop: 20,
    alignItems: "center",
    width: width,
  },
  charName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,

    // color: "#5564BE",
  },
  speciesTextStyle: {
    marginTop: 8,
    // fontWeight: "bold",
    fontSize: 17,
  },
  speciesStyle: {
    fontSize: 13,
    color: "#868698",
    // marginRight: 9,
  },
  speciesViewStyle: {
    // borderWidth: 1,
    // flexDirection: "row",
    width: "90%",
  },

  separator: {
    marginTop: 10,
    borderBottomColor: "#e4e5ea",
    borderBottomWidth: 1,
    marginBottom: 15,
    width: "90%",
  },
  likeButtonStyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 20,
  },
});
