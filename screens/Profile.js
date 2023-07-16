import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/alphabet.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileDescription}>Children</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5EB',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFA500',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFA500',
  },
  profileDescription: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  }
});

export default Profile;