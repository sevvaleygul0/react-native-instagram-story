import React from 'react';
import {Image} from 'react-native';
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
  return <Image style={styles.imageStyle} source={storyPhoto} />;
};

export default Story;
