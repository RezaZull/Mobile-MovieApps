import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GridListView from '../components/GridListView';

const Profile = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        let item = [
            { id: 1, judul: 'adsasda 1', img: 'https://reactjs.org/logo-og.png', desc: 'asdadasdas', gendre: [{ id: 1, name: 'Horror', priColor: '#C73608', active: false }, { id: 2, name: 'Mystery', priColor: '#9747FF', active: false },] },
            { id: 2, judul: 'adsasda 2', img: 'https://reactjs.org/logo-og.png', desc: 'asdadasdas', gendre: [{ id: 1, name: 'Horror', priColor: '#C73608', active: false }, { id: 2, name: 'Mystery', priColor: '#9747FF', active: false },] },
            { id: 3, judul: 'adsasda 3', img: 'https://reactjs.org/logo-og.png', desc: 'asdadasdas', gendre: [{ id: 1, name: 'Horror', priColor: '#C73608', active: false }, { id: 2, name: 'Mystery', priColor: '#9747FF', active: false },] },
            { id: 4, judul: 'adsasda 3', img: 'https://reactjs.org/logo-og.png', desc: 'asdadasdas', gendre: [{ id: 1, name: 'Horror', priColor: '#C73608', active: false }, { id: 2, name: 'Mystery', priColor: '#9747FF', active: false },] },
        ]
        setData(item)
        return () => {
        }
    }, [])

    return (
        <View style={{ flex: 1 }} >
            <View style={{flex:1}} >
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ height: 200, }} />
                <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }} >Ikhsan Hardiansyah</Text>
                <SafeAreaView style={{ padding: 20, }} >
                    <View style={{ flexDirection: 'row', marginBottom: 10 }} >
                        <Text style={styles.listTitle} >Recently View </Text>
                        <Text style={styles.listSeeMore} >See More</Text>
                    </View>
                    <FlatList
                        data={Data}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => GridListView({ data: item })}
                        horizontal={true}
                    />
                </SafeAreaView>
            </View>
            <TouchableOpacity style={{borderColor:'#39C708',borderWidth:1,padding:10,alignItems:'center',margin:5}} >
                <Text style={{color:'#39C708'}} >Edit Profile</Text>
            </TouchableOpacity>
        </View>
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
export default Profile