import React from 'react';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ imageSource, profile, username, city, country }) => {
  return (
    <div className='photo-list__item'>
      <img className='photo-list__image' src={imageSource} alt='sample image' />
      <img className='photo-list__user-profile ' src={profile} alt={username} />
      <p className='photo-list__user-info'>{username}</p>
      <p className='photo-list__user-location'>
        {city},{country}
      </p>
    </div>
  );
};

export default PhotoListItem;
