import React from 'react';
import PropTypes from 'prop-types';
import TopicList from 'components/TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ getPhotos, topics, showNotification, favorites }) => {
  return (
    <div className='top-nav-bar'>
      <p className='top-nav-bar__logo' onClick={() => getPhotos('logo')}>
        PhotoLabs
      </p>
      <div>
        <TopicList
          topics={topics}
          getPhotos={getPhotos}
          showNotification={showNotification}
          favorites={favorites}
        />
      </div>
    </div>
  );
};

// Define prop type validations
TopNavigation.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  getPhotos: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
};

export default TopNavigation;
