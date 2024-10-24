import {StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import Heading from '../components/Heading';
import ProjectInfoCard from '../components/ProjectInfoCard';
import Taskdetails from '../components/TaskDetails';
import Members from '../components/Members';
import Assets from '../components/Assets';
import Documents from '../components/Documents';

export default function ProjectInfo() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f3f6" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Heading title="Metanas UI Design" />
        <ProjectInfoCard />
        <Taskdetails />
        <Members title="Members" />
        <Assets />
        <Documents />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f6',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
});
