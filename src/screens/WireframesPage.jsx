import {StyleSheet, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Heading from '../components/heading';
import DetailProjectInfoCard from '../components/detailprojectinfo';
import Checkbox from '../components/checkbox';
import Logexpense from '../components/log';
import Members from '../components/members';
import Comments from '../components/comments';

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
