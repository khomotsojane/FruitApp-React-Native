import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { FoodContext } from '../../Manager/foodmanager';

export default function Orders() {
  const {foodItems, Setfooditems}=useContext(FoodContext);
  //console.log(foodItems);
  return (
    <View style={styles.container}>
      <View style={styles.picture}>
      {
      foodItems?.map((item)=>(
          <View style={{width:400,height:500, borderBottomLeftRadius:20}}>
         <Image
          source={item.src}
                  style={{
                    borderRadius: 10,
                    width: 400,
                    height: 500,
                    borderWidth: 2,
                    borderColor: "#E8A392",
                    resizeMode: "contain",
                  }}
          />
          </View>
        ))
      }
      </View>
      <View style={styles.description}>
      {
      foodItems?.map((item)=>(
          <View>
          <Text style={{fontWeight:'bold', marginTop:20, marginHorizontal:10}}>{item.description}</Text>
          </View>
        ))
      }
      </View>
      <View style={styles.price}>
      {
      foodItems?.map((item)=>(
          <View>
          <Text style={{fontWeight:'bold', fontSize:40, textAlign:'center'}}>{item.price}</Text>
          </View>
        ))
      }
      <TouchableOpacity style={{borderColor:'white', backgroundColor:'green',height:30,marginTop:15, borderRadius:16}}>
        <Text style={{textAlign:'center'}}>Add to card</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  picture:{
    flex:5,
    backgroundColor:'blue'
  },
  description:{
    flex:2,
    backgroundColor:"#E8A392"
  },
  price:{
    flex:4,
    backgroundColor:"#E8A392"
  }

})