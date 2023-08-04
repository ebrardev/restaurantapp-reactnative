import axios from "axios";
import Constants from 'expo-constants'; // Eğer Expo kullanıyorsanız

 // Expo için
 const { YELP_API_BASEURL, YELP_API_KEY } = process.env; // Eğer başka bir çözüm kullanıyorsanız

export default axios.create({
  baseURL: YELP_API_BASEURL,
  headers: { Authorization: `Bearer ${YELP_API_KEY}` }
});

