import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoListItem.scss';

const PhotoDetailsModal = (props) => {
  const { clickedPhoto, toggleModal, favorites, toggleFavorite } = props;

  // Extracting similar photos data from clicked photo
  const similarPhotos = Object.values(clickedPhoto[0].similarPhotos);

  return (
    <div className='photo-details-modal'>
      {/* Close button */}
      <button className='photo-details-modal__close-button'>
        <img src={closeSymbol} alt='close symbol' onClick={toggleModal} />
      </button>

      {/* Modal content */}
      <div className='photo-details-modal__content'>
        {/* Image container */}
        <div className='photo-details-modal__image-container'>
          <img
            className='photo-details-modal__image'
            src={clickedPhoto[0].urls.full}
            alt='photo-image'
          />
        </div>
        {/* Additional information */}
        <div className='photo-details-modal__info'>
          {/* Favorite button */}
          <PhotoFavButton
            selected={favorites.includes(clickedPhoto[0].id)}
            onClick={() => toggleFavorite(clickedPhoto[0].id)}
          />
          {/* Header for similar photos */}
          <h4 className='photo-details-modal__header'>Similar Photos</h4>
          {/* List of similar photos */}
          <div className='photo-details-modal__similar-photos'>
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
    </div>
  );
};

export default PhotoDetailsModal;
