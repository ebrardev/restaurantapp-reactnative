import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchApi, results] = useResult();

  useEffect(() => {
    if (term) {
      searchApi(term);
    }
  }, [term]);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  }

  return (
    <View>
      <ScrollView>
        <SearchBar
          term={term}
          onTermChange={setTerm}
        />
        <ResultsList title="ucuz restoranlar" results={filterResultsByPrice('₺')} />
        <ResultsList title="uygun restoranlar" results={filterResultsByPrice('₺₺')} />
        <ResultsList title="pahalı restoranlar" results={filterResultsByPrice('₺₺₺')} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
