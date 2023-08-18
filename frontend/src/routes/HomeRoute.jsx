import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className='home-route'>
      <TopNavigation
        topics={props.topics}
        showNotification={props.showNotification}
        getPhotos={props.getPhotos}
        favorites={props.favorites}
      />
      <PhotoList
        photos={props.photos}
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        clickedPhoto={props.clickedPhoto}
        expandModal={props.expandModal}
      />
    </div>
  );
};

export default HomeRoute;
