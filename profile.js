import { SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import React from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import { profileList } from './data'

export default function ProfileApp() {

    onPress = (title) => {
        alert(title + ' button clicked!')
    }
    renderItem = ({ item }) => {
        return (
           
            <TouchableOpacity
                onPress={() => this.onPress(item.title)}>
                    <View style={styles.card}>
                    <Text style={{color: 'white', fontSize: 14, paddingLeft: 12 ,paddingEnd:12,paddingTop: 8, paddingBottom:8}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <View style={styles.logo_container}>
                <Image
                    style={{ width: 91, height: 33, resizeMode: 'contain' }}
                    source={require('./image/verizon_logo.png')} />
            </View>
            <View style={styles.line_view} />
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <Image
                    style={{ height: 150, marginStart: 20, borderRadius: 10, flex: 0.3 }}
                    source={require('./image/profile_img.png')} />
                <View style={{ flex: 0.7, marginStart: 10 }}>
                    <Text style={{ fontSize: 24, color: 'black' }}>Vignesh M</Text>
                    <Text style={{ fontSize: 16 }}>Engr III Cslt-App Dev</Text>
                </View>
            </View>
            <FlatList
                style = {{flexGrow:0, marginTop: 24}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={profileList}
                renderItem={renderItem}
                keyExtractor={item => item.buttonId}

            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    line_view: {
        borderTopWidth: 5,
        borderTopColor: 'blue',
        marginTop: 16,
        marginStart: 10,
        marginEnd: 10,
    },
    logo_container: {
        alignItems: 'flex-end',
        marginTop: 16,
        marginEnd: 10,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        margin: 8,
        paddingEnd: 12,
        paddingStart: 12,
        backgroundColor:'#425ba6',
    },
})