import { useEffect, useState } from "react";
import data from "../api/data";


export default () => {
    const searchApi = async (searchTerm) => {
        await data.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'Mersin',
            }
        })
    }
    useEffect(() => {
        searchApi('pasta');
    }, []);
 return [searchApi];
};