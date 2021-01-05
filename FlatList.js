import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';

const Flist = () => {
    //data source
    const people = [
        { name: 'elijah', key: 1},
        { name: 'kevin', key: 2},
        { name: 'krunal', key: 3},
        { name: 'sebastian', key: 4},
        { name: 'zhiwei', key: 5},
        { name: 'aida', key: 6},
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
                data = {friendsArray}
                renderItem = {({ item }) => (
                    <Text>{item.name}</Text>
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
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'teal',
        fontSize: 24,
    },
});