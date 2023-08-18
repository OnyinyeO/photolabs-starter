import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoListItem.scss';

const PhotoDetailsModal = (props) => {
  const { clickedPhoto, expandModal, favorites, toggleFavorite } = props;

  const similarPhotos = clickedPhoto[0]?.similarPhotos ?? [];

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button'>
        <img src={closeSymbol} alt='close symbol' onClick={expandModal} />
      </button>

      {/* Modal content */}
      <div className='photo-details-modal__images'>
        <div className='photo-details-modal__image-container'>
          <span>
            <PhotoFavButton
              selected={favorites.includes(clickedPhoto[0]?.id)}
              onClick={() => toggleFavorite(clickedPhoto[0]?.id)}
            />
          </span>
          <img
            className='photo-details-modal__image'
            src={clickedPhoto[0]?.urls.full}
            alt='photo-image'
          />
        </div>

        <div>
          <h4 className='photo-details-modal__header'>Similar Photos</h4>
          <PhotoList
            photos={similarPhotos}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            clickedPhoto={clickedPhoto}
            expandModal={expandModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
