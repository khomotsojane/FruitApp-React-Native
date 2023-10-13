import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function List() {
  const [fruits, setFruits] = useState([
    { src: require("../../assets/apple.jpg"), name: "Apple", id: 1, price:'R30',decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process' },
    { src: require("../../assets/banana.jpg"), name: "Banana", id: 2, price:'R30',decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process'},
    { src: require("../../assets/watermelon.jpg"), name: "Watermelon", id: 3, price:'R30', decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process'},
    { src: require("../../assets/grapes.jpg"), name: "Grapes", id: 4, price:'R30', decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process' },
    { src: require("../../assets/plums.jpg"), name: "Plums", id: 5, price:'R30', decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process'},
    { src: require("../../assets/Berries.jpg"), name: "Strawberry", id: 6, price:'R30', decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process' },
    { src: require("../../assets/orange.jpg"), name: "Orange", id: 7, price:'R30', decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process' },
    { src: require("../../assets/mango.jpg"), name: "Mango", id: 8, price:'R30', decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process' },
    { src: require("../../assets/guava.jpg"), name: "Guava", id: 9, price:'R30', decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process' },
    { src: require("../../assets/peach.jpg"), name: "Peaches", id: 10, price:'R30', decription:' Pies, crisps, and other baked treats, apples need to be firm enough to hold their own during the cooking process' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.upperview}>
        <Text style={{ marginTop: 60, fontSize: 25, fontWeight: "bold" }}>
          Fruit Fantasy
        </Text>
        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: "bold" }}>
          Welcome
        </Text>
        <Text style={{ marginTop: 5, fontSize: 10 }}>Fruits, desserts, meal and recipe</Text>
        <View>
          <TextInput
            style={{
              backgroundColor: "white",
              width: 340,
              margin: 10,
              borderRadius: 10,
              borderColor: "#E8A392",
              borderWidth: 1,
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.horscroll}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={fruits}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text style={styles.items}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.verscroll}>
        
        <FlatList
          numColumns={2}
          data={fruits}
          renderItem={({ item }) => (
            <TouchableOpacity>
              {/* <Text style={styles.itemsCard}>{item.name}</Text> */}
              <View
                style={{
                  backgroundColor: "#E8A392",
                  width: 150,
                  height: 170,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius:10
                }}
              >
                <Image
                  source={item.src}
                  style={{
                    borderRadius:10,
                    width: 150,
                    height: 100,
                    borderWidth: 2,
                    borderColor: "#E8A392",
                    resizeMode: "contain",
                  }}
                />
                <View style={{flexDirection:'row'}}>
                   <Text style={{ fontWeight:'bold'}} >{item.name}</Text>
                  <Text style={{marginLeft:20, fontWeight:'bold'}}>{item.price}</Text>
                </View>
                <Text style={{fontSize:10}}><Text style={{fontWeight:'bold'}}>Description:</Text>{item.decription}</Text>
                 
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  upperview: {
    flex: 3,
    backgroundColor: "white",
  },
  horscroll: {
    flex: 1,
    backgroundColor: "white",
  },
  verscroll: {
    flex: 8,
    backgroundColor: "white",
  },
  items: {
    //backgroundColor:'',
    marginHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    height: 30,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#FFE6D9",
    borderColor: "white",
    borderRadius: 10,
    width: 70,
    textAlign: "center",
  },
  itemsCard: {
    marginHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    height: 100,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#E8A392",
    borderColor: "white",
    borderRadius: 10,
    width: 150,
    textAlign: "center",
  },
});
