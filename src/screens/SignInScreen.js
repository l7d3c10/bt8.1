import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const SignInScreen = () => {
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email ID</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your email here!" 
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your password here!" 
          secureTextEntry 
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={() => login()}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.googleBtn]}>
          <Text style={styles.googleText}>G Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.fbBtn]}>
          <Text style={styles.fbText}>f Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Not yet a member? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  inputContainer: { marginBottom: 15 },
  label: { fontSize: 14, fontWeight: 'bold', marginBottom: 5, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, backgroundColor: '#fff' },
  forgotText: { color: 'orange', textAlign: 'right', marginTop: 5, fontSize: 12 },
  signInButton: { backgroundColor: 'orange', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  signInText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  orText: { textAlign: 'center', marginVertical: 20, color: '#555', fontWeight: 'bold' },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  socialButton: { flex: 1, padding: 12, borderRadius: 5, alignItems: 'center', borderWidth: 1, marginHorizontal: 5 },
  googleBtn: { backgroundColor: 'white', borderColor: '#ccc' },
  googleText: { color: '#333', fontWeight: 'bold' },
  fbBtn: { backgroundColor: '#3b5998', borderColor: '#3b5998' },
  fbText: { color: 'white', fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 30 },
  footerText: { color: '#333' },
  signUpText: { color: 'orange', fontWeight: 'bold' },
});

export default SignInScreen;