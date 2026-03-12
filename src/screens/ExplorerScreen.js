import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const ExplorerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Explorer</Text>
        
        <View style={styles.searchContainer}>
          <Text style={styles.icon}>📍</Text>
          <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
          <Text style={styles.icon}>🔍</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <Text style={styles.filterText}>Filter</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          {['Pizza', 'Burgers', 'Steak'].map((item, index) => (
            <View key={index} style={styles.categoryItem}>
              <View style={styles.categoryImgPlaceholder} />
              <Text style={styles.categoryText}>{item}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <Text style={styles.viewAllText}>View all</Text>
        </View>
        
        <View style={styles.popularContainer}>
          <View style={styles.popularCard}>
            <View style={styles.cardImgPlaceholder} />
            <Text style={styles.cardTitle}>Food 1</Text>
            <Text style={styles.cardSub}>By Viet Nam</Text>
            <Text style={styles.cardPrice}>1$</Text>
          </View>
          <View style={styles.popularCard}>
            <View style={styles.cardImgPlaceholder} />
            <Text style={styles.cardTitle}>Food 2</Text>
            <Text style={styles.cardSub}>By Viet Nam</Text>
            <Text style={styles.cardPrice}>3$</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', paddingHorizontal: 15 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 15 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, padding: 10, borderWidth: 1, borderColor: '#eee' },
  searchInput: { flex: 1, marginHorizontal: 10 },
  icon: { fontSize: 16 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold' },
  filterText: { color: 'orange' },
  viewAllText: { color: 'orange' },
  categoryScroll: { flexDirection: 'row' },
  categoryItem: { alignItems: 'center', marginRight: 15 },
  categoryImgPlaceholder: { width: 80, height: 60, backgroundColor: '#ddd', borderRadius: 8 },
  categoryText: { marginTop: 5, fontSize: 12, fontWeight: '500' },
  popularContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  popularCard: { width: '48%', backgroundColor: '#fff', padding: 10, borderRadius: 8 },
  cardImgPlaceholder: { width: '100%', height: 100, backgroundColor: '#ccc', borderRadius: 8, marginBottom: 10 },
  cardTitle: { fontWeight: 'bold' },
  cardSub: { fontSize: 12, color: '#777', marginVertical: 5 },
  cardPrice: { fontWeight: 'bold', fontSize: 16 },
});

export default ExplorerScreen;