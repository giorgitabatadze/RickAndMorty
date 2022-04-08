import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Dimensions,
} from "react-native";
import axios from "axios";
import Screen from "./Screen";
import SearchDropDown from "./SearchDropDown";

const WIDTH = Dimensions.get("window").width;

export default function HomeScreen({ navigation, props }) {
  const [data, setData] = useState();
  // const [dataSource, setDataSource] = useState();

  const [dataSource, setDataSource] = useState([]);

  const [filtered, setFiltered] = useState(dataSource);
  const [searching, setSearching] = useState(false);
  const onSearch = (text) => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = dataSource.filter((item) => {
        if (item.toLowerCase().match(temp)) return item;
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(dataSource);
    }
  };

  const loadData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        setData(response.data);
        // setDataSource(response.data.results);
        // console.log(response.data);
        for (let item of response.data.results) {
          dataSource.push(item.name);
        }
        // console.log("dataaSource", dataSource);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const selectSearchItem = ({ item }) => {
    setSearching(false);
    // console.log("item -", item);
    data?.results.filter((k) => {
      if (k.name.toLowerCase().match(item.toLowerCase())) {
        navigation.navigate("CharacterProfileScreen", {
          data: k,
        });
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const RenderItem = ({ item, index }) => {
    return (
      <View style={styles.itemView}>
        <TouchableOpacity
          style={styles.flatListTouchStyle}
          onPress={() => {
            navigation.navigate("CharacterProfileScreen", {
              data: data?.results[index],
            });
          }}
        >
          <Text style={[styles.flatListTextStyle, { width: 200 }]}>
            {item.name}
          </Text>
          <Text
            style={[
              styles.flatListTextStyle,
              {
                color:
                  item.status === "Alive"
                    ? "green"
                    : item.status === "Dead"
                    ? "red"
                    : "grey",
              },
            ]}
          >
            {item.status}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Screen>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="white"
          onChangeText={onSearch}
        />
        {searching && (
          <SearchDropDown
            onPress={(item, index) => {
              navigation.navigate("CharacterProfileScreen", {
                // item: item
                data: data?.results[index],
              });
              // console.log("asd", item);
              // console.log("index", index);
            }}
            dataSource={filtered}
          />
        )}

        <View style={{ flex: 1, marginTop: 40 }}>
          <FlatList
            data={data?.results}
            renderItem={RenderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    backgroundColor: "#BFBFBF",
    width: "90%",
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginTop: 40,
  },

  flatListTouchStyle: {
    marginBottom: 10,
    alignItems: "center",
    width: WIDTH - 30,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "pink",
    borderWidth: 0.51,
    borderRadius: 3,
    borderColor: "#000",
    height: 40,
  },

  flatListTextStyle: {
    fontSize: 16,
    // textAlign: "center",
    paddingHorizontal: 14,
  },
  itemView: {
    marginBottom: 20,
  },
});
