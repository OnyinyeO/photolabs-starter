import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import TopicListItem from './TopicListItem';
import FavIcon from 'components/FavIcon';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { topics, getPhotos, showNotification, favorites } = props;

  const topicListItemArray = topics.map((topic) => (
    <TopicListItem key={Number(topic.id)} topic={topic} getPhotos={getPhotos} />
  ));

  return (
    <div className='top-nav-bar__topic-list'>
      {topicListItemArray}
      <div className={`fav-badge ${showNotification ? 'active' : ''}`}>
        <FavIcon displayAlert={showNotification} selected={showNotification} />
        {showNotification && <span>{favorites.length}</span>}
      </div>
    </div>
  );
};

// Define prop type validations
TopicList.propTypes = {
  topics: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  showNotification: PropTypes.bool.isRequired,
  favorites: PropTypes.array.isRequired,
};

export default TopicList;
