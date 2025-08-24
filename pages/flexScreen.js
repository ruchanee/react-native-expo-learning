import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar, Platform, Button } from 'react-native';

const DUMMY_IMAGE_1 = 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1279838817-646fac07bc6b6.jpg?crop=0.535xw:1.00xh;0.161xw,0&resize=980:*';
const DUMMY_IMAGE_2 = 'https://hips.hearstapps.com/hmg-prod/images/lilac-gettyimages-1219529266-646f996133c74.jpg?crop=0.535xw:1.00xh;0.275xw,0&resize=980:*';
const DUMMY_IMAGE_3 = 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-937574662-646fa43234d8c.jpg?crop=0.535xw:1.00xh;0.465xw,0&resize=980:*';

export default function FlexScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.profileContainer}>
        <Image source={{ uri: DUMMY_IMAGE_1 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_2 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_3 }} style={styles.profileImage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  profileContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  buttonContainer: {
    marginTop: 20,
  },
});