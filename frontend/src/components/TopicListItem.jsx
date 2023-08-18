import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { getPhotosOfTopic } = props;

  return (
    <div className='topic-list__item'>
      <p onClick={() => getPhotosOfTopic(props.topic.id)}>
        {props.topic.title}
      </p>
    </div>
  );
};

export default TopicListItem;
