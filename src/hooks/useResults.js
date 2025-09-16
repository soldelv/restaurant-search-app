import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'San Francisco',
                    limit: 50
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            console.error("Error fetching data from Yelp API:", error);
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
}