import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  return (
    <div className='photo-list__item'>
      <PhotoFavButton
        selected={props.selected}
        onClick={props.toggleFavorite}
      />
      <img
        className='photo-list__image'
        src={props.photo.urls.regular}
        alt='sample image'
        onClick={props.toggleModal}
      />
      <div className='photo-list__user-details '>
        <img
          className='photo-list__user-profile '
          src={props.photo.user.profile}
          alt='username'
        />
      </div>
      <h4 className='photo-list__user-info'>{props.photo.user.name}</h4>
      <p className='photo-list__user-location'>
        {props.photo.location.city}, {props.photo.location.country}
      </p>
    </div>
  );
};

export default PhotoListItem;
