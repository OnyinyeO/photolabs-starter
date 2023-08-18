import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoListItem.scss';

const PhotoDetailsModal = (props) => {
  const { clickedPhoto, toggleModal, favorites, toggleFavorite } = props;

  const similarPhotos = Object.values(clickedPhoto[0].similarPhotos);

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button'>
        <img src={closeSymbol} alt='close-button' onClick={toggleModal} />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton
          selected={favorites.includes(clickedPhoto[0].id)}
          onClick={() => toggleFavorite(clickedPhoto[0].id)}
        />
        <img
          className='photo-details-modal__image'
          src={clickedPhoto[0].urls.full}
          alt='photo-image'
        />
        <div className='.photo-details-modal__header'>
          <h4>Similar Photos</h4>
        </div>
        <div>
          <PhotoList
            photos={similarPhotos}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            clickedPhoto={clickedPhoto}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
