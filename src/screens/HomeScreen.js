import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import BadgeList from '../components/BadgeList';
import GridListView from '../components/GridListView';
import ListView from '../components/ListView';

const HomeScreen = () => {
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
                    <View style={{ flexDirection: 'row', marginBottom: 10 }} >
                        <Text style={styles.listTitle} >Favorites </Text>
                        <Text style={styles.listSeeMore} >See More</Text>
                    </View>
                    <FlatList
                        data={Data}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => GridListView({data:item})}
                        horizontal={true}
                    />
                </SafeAreaView>
                <SafeAreaView style={{ padding: 20 }} >
                    <View style={{ flexDirection: 'row', marginBottom: 10 }} >
                        <Text style={styles.listTitle} >In Theaters </Text>
                        <Text style={styles.listSeeMore} >See More</Text>
                    </View>
                    <FlatList
                        data={Data}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => GridListView({data:item})}
                        horizontal={true}
                    />
                </SafeAreaView>
                <SafeAreaView style={{ padding: 20 }} >
                    <View style={{ flexDirection: 'row', marginBottom: 10 }} >
                        <Text style={styles.listTitle} >Comming Soon </Text>
                        <Text style={styles.listSeeMore} >See More</Text>
                    </View>
                    {/* <FlatList
                        data={Data}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => ListView(item)}
                    /> */}
                    {Data.map((item,idx)=>{
                        return(
                            <ListView data={item} key={idx} />
                        )
                    })}
                </SafeAreaView>
            </ScrollView>
    )
}
const styles = StyleSheet.create({
    listTitle: {
        flex: 1, textAlign: 'left', fontSize: 15
    },
    listSeeMore: {
        flex: 1, textAlign: 'right', fontSize: 15
    }
})
export default HomeScreen;