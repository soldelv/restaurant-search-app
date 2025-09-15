import axios from 'axios';
import Config from 'react-native-config';

export default axios.create({
    baseURL: Config.YELP_BASE_URL,
    headers: {
        Authorization: `Bearer ${Config.YELP_API_TOKEN}`
    }
});