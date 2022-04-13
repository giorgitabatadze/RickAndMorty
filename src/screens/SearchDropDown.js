import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from "react-native";
import { Touchable } from "react-native-web";

export default function SearchDropDown(props, { navigation }) {
  const { dataSource } = props;
  const { newData } = props;

  console.log(" datasource", dataSource);
  return (
    <View onPress={props.onPress} style={styles.container}>
      <View style={styles.subContainer}>
        {dataSource.length ? (
          dataSource.map((item) => {
            console.log("item", item.name);
            return (
              <TouchableOpacity
                style={{ backgroundColor: "pink" }}
                onPress={() =>
                  props.navigation.navigate("CharacterProfileScreen", {
                    data: item,
                  })
                }
              >
                <View style={styles.itemView}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <View style={styles.noResultView}>
            <Text style={styles.noResultText}>No search items matched</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "6.2%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "pink",
    zIndex: 100,
  },
  subContainer: {
    // backgroundColor: "#84DCC6",
    marginTop: 50,
    paddingTop: 10,
    marginHorizontal: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    // flexWrap: "wrap",

    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  itemView: {
    // marginHorizontal: '10%',
    backgroundColor: "white",
    height: 30,
    width: "90%",
    // marginBottom: 10,
    justifyContent: "center",
    borderRadius: 4,
  },
  itemText: {
    color: "black",
    paddingHorizontal: 10,
  },
  noResultView: {
    alignSelf: "center",
    // margin: 20,
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  noResultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
