import React from 'react';
import {Text, TouchableOpacity, } from "react-native"

const BadgeList = ({data,badgeStyle,textStyle})=>{
    if (data.active) {
        return (
            <TouchableOpacity style={[{padding:4,paddingHorizontal:10, backgroundColor:data.priColor,borderRadius:20,alignSelf:'flex-start',marginRight:5},badgeStyle]} >
                <Text style={[{color:'white'},textStyle]} >{data.name}</Text>
            </TouchableOpacity>
        )
    }else{
        return(
            <TouchableOpacity style={[{padding:4,paddingHorizontal:10, borderColor:data.priColor, borderWidth:1,borderRadius:20,alignSelf:'flex-start',marginRight:5},badgeStyle]} >
                <Text style={[{color:data.priColor},textStyle]} >{data.name}</Text>
            </TouchableOpacity>
        )
    }
}
export default BadgeList;