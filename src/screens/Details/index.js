import { useState, useEffect } from 'react';
import { View, Text, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Card } from '../../components/Card';

export default function Details(){
    const [data, setData] = useState([]);

    useEffect(() => {
        readData();
    },[])

    async function readData(){
        const response = await AsyncStorage.getItem('@myapp:users');
        const json = JSON.parse(response);
        setData(json);
    }

    return (
        <View className='flex-1 bg-black'>
            <Text className='text-red-500'> Detalhes de um produto </Text>
            <FlatList data={data} renderItem={({ index, item }) => (
            <Card title={`Cidade: ${item.address.city}`} image={'https://github.com/Caio18-cosenza.png'} />
           )} keyExtractor={(item, index) => index} />
        </View>
    )
}