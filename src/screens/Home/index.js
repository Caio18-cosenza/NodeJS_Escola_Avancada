import { useEffect, useState } from "react";
import { View, Text, Button, FlatList, SectionList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Card } from "../../components/Card";

export default function Home(){
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    //         setData(res.data);
    //         saveData(res.data);
    //     }).catch(err => console.warn(err));
    // },[]);

    return (
        <View className='flex-1 bg-black'>
            <Text className='text-red-500'> Bem vindo a HOME </Text>
           <Button title="Ir para detalhes" onPress={() => {
            navigation.navigate('Details');
           }} />

           <FlatList data={data} renderItem={({ index, item }) => (
            <Card title={`Cidade: ${item.address.city}`} image={'https://github.com/Caio18-cosenza.png'} />
           )} keyExtractor={(item, index) => index} />
        </View>
    )
}
