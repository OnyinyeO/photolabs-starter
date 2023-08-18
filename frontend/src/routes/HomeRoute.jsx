import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className='home-route'>
      <TopNavigation
        topics={props.topics}
        toggleNotification={props.toggleNotification}
        getPhotosOfTopic={props.getPhotosOfTopic}
      />
      <PhotoList
        photos={props.photos}
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        clickedPhoto={props.clickedPhoto}
        toggleModal={props.toggleModal}
      />
    </div>
  );
};

export default HomeRoute;
