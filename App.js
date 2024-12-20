import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';

export default function App() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Personal Bio Data</Text>

    {/* Profile Image */}
      <Image
        source={require('./assets/IMG_4367.jpg')} // Use the local image
        style={styles.profileImage}
      />
      
      <View style={styles.section}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>Sukhdeep Singh</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text
          style={styles.link}
          onPress={() => openLink('mailto:singh-s1266@uwinnipeg.ca')}
        >
          singh-s1266@uwinnipeg.ca
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Phone:</Text>
        <Text
          style={styles.link}
          onPress={() => openLink('tel:+14378382800')}
        >
          +1 437 838 2800
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>Winnipeg, MB, Canada</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Bio:</Text>
        <Text style={styles.value}>
          A passionate software developer with 5 years of experience in building mobile apps.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Interests:</Text>
        <Text style={styles.value}>Traveling, Photography, Coding, Music, Reading</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.value}>React Native, JavaScript, Node.js, SQL</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Social Media Links:</Text>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/sukhdeep-singh-01a24b290/')}>
          <Text style={styles.link}>LinkedIn: linkedin.com/in/Sukhdeep Singh</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 2,
  },
  section: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});
