import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";

const Searchbar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.background}>
        <Feather name="search" style={styles.icon} />
        <TextInput
            style={styles.input}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            autoCapitalize="none"
            autoCorrect={false}
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: "#f0eeee",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row"
    },
    icon: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    },
    input: {
        flex: 1,
        fontSize: 18
    }
});

export default Searchbar;