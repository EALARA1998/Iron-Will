import { useState } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <View className="mb-4">
        <Text className="text-xl font-bold text-gray-800 mb-2">Toddler</Text>
        <View className="bg-white p-4 rounded-xl shadow-sm mb-2">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg text-gray-700">Boy: {count}</Text>
            <View className="flex-row gap-2">
              <Pressable 
                className="bg-blue-500 px-4 py-2 rounded-lg active:bg-blue-600" 
                onPress={() => setCount(count - 1)}
              >
                <Text className="text-white text-xl font-bold">-</Text>
              </Pressable>
              <Pressable 
                className="bg-blue-500 px-4 py-2 rounded-lg active:bg-blue-600" 
                onPress={() => setCount(count + 1)}
              >
                <Text className="text-white text-xl font-bold">+</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Text className="text-base text-gray-600 my-1">Nursery</Text>
      <Text className="text-base text-gray-600 my-1">Pre - Kinder</Text>
      <Text className="text-base text-gray-600 my-1">Kinder</Text>
      <Text className="text-base text-gray-600 my-1">1er</Text>
      <Text className="text-base text-gray-600 my-1">2do</Text>
      <Text className="text-base text-gray-600 my-1">3ro</Text>
      <Text className="text-base text-gray-600 my-1">4to</Text>
      <Text className="text-base text-gray-600 my-1">5to</Text>
      <Text className="text-base text-gray-600 my-1">6to</Text>
      <Text className="text-base text-gray-600 my-1">7mo</Text>
      <Text className="text-base text-gray-600 my-1">8vo</Text>
    </ScrollView>
  );
}
