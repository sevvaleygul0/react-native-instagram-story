import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {IStory} from '../Stories';
/**
 * ? Local Imports
 */
import styles from './Story.style';

interface IStoryProps {
  storyItem: IStory;
}

const Story: React.FC<IStoryProps> = ({storyItem}) => {
  const {storyPhoto} = storyItem;
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={storyPhoto} />
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

export default Story;
