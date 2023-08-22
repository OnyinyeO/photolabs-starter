import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { getPhotos, topic } = props;

  return (
    <div className='topic-list__item'>
      <p onClick={() => getPhotos(topic.id)}>{topic.title}</p>
    </div>
  );
};

// Define prop type validations
TopicListItem.propTypes = {
  getPhotos: PropTypes.func.isRequired,
  topic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TopicListItem;
