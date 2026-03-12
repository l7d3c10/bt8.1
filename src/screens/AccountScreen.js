import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Account</Text>
      
      <View style={styles.blueHeader}></View>

      <View style={styles.profileSection}>
        <Text style={styles.name}>LeCongDuc</Text>
        <Text style={styles.jobTitle}>Mobile developer</Text>
        
        <Text style={styles.bio}>
          I have above 5 years of experience in native mobile apps development, now i am learning React Native
        </Text>

        <TouchableOpacity style={styles.signOutBtn} onPress={() => logout()}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', margin: 15 },
  blueHeader: { height: 150, backgroundColor: '#00bfff', width: '100%' },
  profileSection: { flex: 1, alignItems: 'center', padding: 20, marginTop: 20 },
  name: { fontSize: 22, color: '#555' },
  jobTitle: { fontSize: 14, color: '#00bfff', marginTop: 5, marginBottom: 15 },
  bio: { textAlign: 'center', color: '#777', paddingHorizontal: 20, marginBottom: 30, lineHeight: 20 },
  signOutBtn: { backgroundColor: 'orange', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 5 },
  signOutText: { color: 'white', fontWeight: 'bold' },
});

export default AccountScreen;