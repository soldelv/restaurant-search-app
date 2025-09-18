import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Searchbar from "../components/Searchbar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return <View style={{ flex: 1 }}>
        <Searchbar
            term={searchTerm}
            onTermChange={setSearchTerm}
            onTermSubmit={searchApi}
        />
        <Text>{searchTerm}</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>Results: {results.length}</Text>
        <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;