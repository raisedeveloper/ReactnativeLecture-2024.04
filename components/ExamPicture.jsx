import React, { useState } from "react";
import { View, Image, TextInput, ActivityIndicator } from "react-native";

export default function ExamPicture() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />} {/* 로딩 중이면 로딩 표시 */}
      <Image
        source={{
          uri: 'https://picsum.photos/200/200',
        }}
        style={{ width: 200, height: 200, borderRadius: 100 }}
        onLoadEnd={() => setLoading(false)} // 이미지 로딩이 끝나면 로딩 상태 변경
      /><br />
      
    </View>
  );
}