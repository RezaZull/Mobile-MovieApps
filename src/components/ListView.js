import React from 'react';
import { Image, Text, View } from "react-native"
import BadgeList from './BadgeList';

const ListView = ({data})=>{
    return (
        <View style={{ marginBottom:10,backgroundColor:'#fff',elevation:2,flexDirection:'row'}} >
                <Image source={{ uri: data.img }} style={{ height: 107, width: 93 }} />
                <View style={{margin:5}} >
                    <Text>{data.judul}</Text>
                    <View style={{flexDirection:'row'}} >
                        {data.gendre.map((item,idx)=>{
                           return <BadgeList data={item} key={idx} badgeStyle={{paddingHorizontal:5,padding:2}} textStyle={{fontSize:12}} />
                        })}
                    </View>
                    <Text>{data.desc}</Text>
                </View>
        </View>
    )
}
export default ListView;