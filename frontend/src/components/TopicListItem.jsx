import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { getPhotos } = props;

  return (
    <div className='topic-list__item'>
      <p onClick={() => getPhotos(props.topic.id)}>{props.topic.title}</p>
    </div>
  );
};

export default TopicListItem;
