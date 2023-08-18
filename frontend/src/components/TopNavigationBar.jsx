import React from 'react';
import FavIcon from './FavIcon';
import TopicList from 'components/TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const { showNotification, getPhotos } = props;

  return (
    <div className='top-nav-bar'>
      <p className='top-nav-bar__logo' onClick={() => getPhotos('logo')}>
        PhotoLabs
      </p>
      <TopicList topics={props.topics} getPhotos={getPhotos} />
      <div className='fav-badge'>
        <FavIcon displayAlert={showNotification} />
        {showNotification && <span>{props.favorites.length}</span>}
      </div>
    </div>
  );
};

export default TopNavigation;
