import {StyleSheet, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Heading from '../components/Heading';
import DetailProjectInfoCard from '../components/DetailProjectInfo';
import Checkbox from '../components/CheckList';
import Logexpense from '../components/Log';
import Members from '../components/Members';
import Comments from '../components/Comments';

export default function WireframesPage() {
  const route = useRoute();
  const title = route.params?.title || 'Wireframes';
  const status = route.params?.status || 'No status provided';

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f3f6" />
      <ScrollView style={styles.container}>
        <Heading title={title} />
        <DetailProjectInfoCard status={status} />
        <Checkbox />
        <Logexpense />
        <Members title="Users" />
        <Comments />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f6',
  },
});
