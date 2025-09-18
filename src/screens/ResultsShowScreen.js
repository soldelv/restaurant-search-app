import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsDetailScreen = ({ route }) => {
    const { id } = route.params.id;
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (err) {
            setError('Something went wrong');
            console.log('Error:', err);
        }
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
         <View>
            <Text>{result.name}</Text>
            <Text>Number of photos: {result.photos ? result.photos.length : 0}</Text>
            {result.photos && result.photos.length > 0 ? (
                <FlatList
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image source={{ uri: item }} style={styles.image} />;
                    }}
                />
            ) : (
                <Text>No photos available</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    },
});

export default ResultsDetailScreen;