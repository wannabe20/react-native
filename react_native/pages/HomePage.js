import { StyleSheet, Button, View, ScrollView } from 'react-native';
import React from 'react';
import ImagePickerExample from '../components/ImagePicker';

export default function HomePage() {
  return (
    <>
      <Button
        title="Login page"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <ImagePickerExample />
    </>
  );
}
