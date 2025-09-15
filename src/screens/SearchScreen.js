import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Searchbar from "../components/Searchbar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    return <View>
        <Searchbar
            term={searchTerm}
            onTermChange={setSearchTerm}
            onTermSubmit={searchApi}
        />
        <Text>{searchTerm}</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>Results: {results.length}</Text>
        <ResultsList title='Cost Effective' />
        <ResultsList title='Bit Pricer' />
        <ResultsList title='Big Spender!' />
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;