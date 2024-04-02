import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

const styles = StyleSheet.create({
  container: {flex:1},
  item: {padding:5, fontSize:16, height:40}
})

export default function FlatListBasic() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, padding:15, fontWeight:'bold'}}>과일 Flat List</Text>
      <FlatList
        data={[
          {key:'Apple'},{key:'Banana'},{key:'Cherry'},{key:'Orange'},{key:'Mango'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}