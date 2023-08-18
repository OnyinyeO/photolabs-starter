import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const topicListItemArray = props.topics.map((topic) => {
    return (
      <TopicListItem
        key={Number(topic.id)}
        topic={topic}
        getPhotos={props.getPhotos}
      />
    );
  });

  return <div className='top-nav-bar__topic-list'>{topicListItemArray}</div>;
};

export default TopicList;
