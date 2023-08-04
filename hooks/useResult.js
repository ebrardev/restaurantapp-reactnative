import { useEffect, useState } from "react";
import data from "../api/data";


export default () => {
    const  [results, setResults] = useState([]);
    const searchApi = async (searchTerm) => {
       const response =   await data.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'Mersin',
            }
        })
        setResults(response.data.businesses);
    }
    useEffect(() => {
        searchApi('pasta');
    }, []);
 return [searchApi, results];
};