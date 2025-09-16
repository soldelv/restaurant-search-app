import axios from 'axios';
// import Config from 'react-native-config';

// export default axios.create({
//     baseURL: Config.YELP_BASE_URL,
//     headers: {
//         Authorization: `Bearer ${Config.YELP_API_TOKEN}`
//     }
// });

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer KxzlvOu0x1WsIoEsRY5F_M29HCH1oBdV1-gS-UpGEoNdZB7o58CERrb_ans9ROwo5eXlVwBPw-BPlsdwzXLLMFLoIAe0vv4LUTy7dFTWn4kPz6TNaolwHGzJjNrHaHYx`
    }
});