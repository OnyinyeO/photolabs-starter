import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const photoListItemsArray = props.photos.map((photo) => {
    const selected = props.favorites.includes(photo.id);

    return (
      <PhotoListItem
        key={Number(photo.id)}
        photo={photo}
        toggleFavorite={() => props.toggleFavorite(photo.id)}
        selected={selected}
        clickedPhoto={props.clickedPhoto}
        expandModal={() => props.expandModal(photo.id)}
      />
    );
  });

  return <ul className='photo-list'>{photoListItemsArray}</ul>;
};

export default PhotoList;
