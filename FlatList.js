import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, FlatList, StyleSheet, View, Image } from 'react-native';

const Flist = () => {
    //data source
    const people = [
        { name: 'elijah', message: 'Love For All, Hatred For None', img_url: 'https://picsum.photos/200', key: 1},
        { name: 'kevin', message: 'Change the world by being yourself', img_url: 'https://picsum.photos/200', key: 2},
        { name: 'krunal', message: 'Every moment is a fresh beginning', img_url: 'https://picsum.photos/200', key: 3},
        { name: 'sebastian', message: 'Aspire to inspire before we expire', img_url: 'https://picsum.photos/200', key: 4},
        { name: 'zhiwei', message: 'Everything you can imagine is real', img_url: 'https://picsum.photos/200', key: 5},
        { name: 'aida', message: 'Whatever you do, do it well', img_url: 'https://picsum.photos/200', key: 6},
    ];
    const friendsArray = [
        {name : "Krunal", key:1},
        {name : "Sb",key:2},
        {name : "kevin",key:3},
        {name : "zyou",key:4},
        {name : "eli",key:5},
        {name : "aida",key:6},
        {name : "sk",key:7},
        {name : "lokesh",key:8},
        {name : "alok c",key:9}
      ];
    return(
        <View style={styles.container}>
            <FlatList
                data = {people}
                renderItem = {({ item }) => (
                    <View style={styles.coloredBox}>
                        <Image
                            style = {styles.icon}
                            source = {{uri: item.img_url}}
                            //source = {require('./assets/icon.png')}
                        />
                        
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.message}>{item.message}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

export default Flist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 40,
    },
    coloredBox: {
        marginTop: 24,
        padding: 20,
        flexDirection: 'row',
        fontSize: 24,
        fontWeight: 'bold',
        borderColor: 'gray',
        borderRadius: 50    ,
        borderWidth: 2,
        fontSize: 24,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    message: {
        color: 'gray',
        fontStyle: 'italic',
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginRight: 10,
    },
});