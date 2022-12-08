import React from 'react';
import { Image, Text, View } from "react-native"

const GridListView = ({data})=>{
    return (
        <View style={{ marginRight:20,marginBottom:10,backgroundColor:'#fff',elevation:2 }} >
            <Image source={{ uri: data.img }} style={{ height: 107, width: 93 }} />
            <Text>{data.judul}</Text>
        </View>
    )
}
export default GridListView;