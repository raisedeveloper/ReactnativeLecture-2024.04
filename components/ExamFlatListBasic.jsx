import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, TextInput, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", display: 'flex' },
  fruits: {
    height: 40, width: 200, borderColor: 'darkviolet', borderWidth: 1, textAlign: 'center', marginTop: 10,
    borderRadius: 20, color: 'lightcoral', fontSize: 20, padding: 5, height: 40
  },
  addButton: {
    marginLeft: 10, backgroundColor: 'lightcoral', padding: 10, borderRadius: 20
  },
  addButtonText: {
    color: 'white', fontSize: 15, fontFamily: 'verdana'
  },
});

export default function FlatListBasic() {
  const [fruitInput, setFruitInput] = useState('');
  const [fruits, setFruits] = useState([{ key: '사과' }, { key: '복숭아' }, { key: '수박' }]);

  const uploadFruit = () => {
    if (fruitInput.trim() !== '') { // 입력값이 비어있지 않은 경우에만 실행
      setFruits([...fruits, { key: fruitInput }]);
      setFruitInput(''); // 입력창 초기화
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderWidth: 1,
            textAlign: 'center',
            marginTop: 10,
            borderRadius: 20,
            color: 'lightcoral',
            fontSize: 15,
            marginRight: 10,
            borderColor: 'lightcoral',
            fontFamily: 'verdana',
          }}
          placeholder="과일 이름을 입력하세요."
          value={fruitInput}
          onChangeText={(text) => setFruitInput(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={uploadFruit}>
          <Text style={styles.addButtonText}>과일 추가</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 30, padding: 15, fontWeight: 'bold', color: 'darkviolet', fontFamily: 'verdana' }}>과일 Flat List</Text>
      <FlatList
        style={{ borderColor: 'coral' }}
        data={fruits}
        renderItem={({ item }) => <Text style={styles.fruits}>{item.key}</Text>}
      />
    </View >
  );
}