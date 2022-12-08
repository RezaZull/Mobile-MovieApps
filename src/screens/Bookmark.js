import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from "react-native"
import BadgeList from '../components/BadgeList';
import ListView from '../components/ListView';

const Bookmark = () => {
    const [Data, setData] = useState([]);
    const [Badge, setBadge] = useState([]);
    useEffect(() => {
        let item = [
            { id: 1, judul: 'adsasda 1', img: 'https://reactjs.org/logo-og.png',desc:'asdadasdas',gendre:[{ id: 1, name: 'Horror', priColor: '#C73608', active: false },{ id: 2, name: 'Mystery', priColor: '#9747FF', active: false },] },
            { id: 2, judul: 'adsasda 2', img: 'https://reactjs.org/logo-og.png',desc:'asdadasdas',gendre:[{ id: 1, name: 'Horror', priColor: '#C73608', active: false },{ id: 2, name: 'Mystery', priColor: '#9747FF', active: false },]  },
            { id: 3, judul: 'adsasda 3', img: 'https://reactjs.org/logo-og.png',desc:'asdadasdas',gendre:[{ id: 1, name: 'Horror', priColor: '#C73608', active: false },{ id: 2, name: 'Mystery', priColor: '#9747FF', active: false },]  },
            { id: 4, judul: 'adsasda 3', img: 'https://reactjs.org/logo-og.png',desc:'asdadasdas',gendre:[{ id: 1, name: 'Horror', priColor: '#C73608', active: false },{ id: 2, name: 'Mystery', priColor: '#9747FF', active: false },]  },
        ]
        let bagde = [
            { id: 0, name: 'All', priColor: '#D3D3D3', active: true },
            { id: 1, name: 'Horror', priColor: '#C73608', active: false },
            { id: 2, name: 'Mystery', priColor: '#9747FF', active: false },
            { id: 3, name: 'Drama', priColor: '#39C708', active: false },
            { id: 4, name: 'Kaiju', priColor: '#32903C', active: false },
        ]
        setData(item)
        setBadge(bagde)
        return () => {
        }
    }, [])

    return (
            <ScrollView style={{ flex: 1 }} >
                <View>
                    <TextInput placeholder='Search' style={{elevation:1,padding:15}} />
                </View>
                <View style={{ padding: 20,flexDirection:'row' }}>
                    <FlatList
                        data={Badge}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => BadgeList({data:item})}
                        contentContainerStyle={{ flexDirection: 'row', }}
                        horizontal={true}
                    />
                </View>
                <SafeAreaView style={{ padding: 20 }} >
                    {Data.map((item,idx)=>{
                        return(
                            <ListView data={item} key={idx} />
                        )
                    })}
                </SafeAreaView>
            </ScrollView>
    )
}
export default Bookmark;