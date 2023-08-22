import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoListItem.scss';

const PhotoDetailsModal = (props) => {
  const { clickedPhoto, expandModal, favorites, toggleFavorite } = props;

  // Extract the first photo from clickedPhoto array (if available)
  const mainPhoto = clickedPhoto[0];
  console.log(mainPhoto, 'main photo');
  // Extract similarPhotos array from the first photo (if available)
  const similarPhotos = mainPhoto?.similar_photos || [];

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
              selected={favorites.includes(mainPhoto?.id)}
              onClick={() => toggleFavorite(mainPhoto?.id)}
            />
          </span>
          <img
            className='photo-details-modal__image'
            src={mainPhoto?.urls.full}
            alt='photo-image'
          />
        </div>
        <h4 className='photo-details-modal__header'>Similar Photos</h4>
        <PhotoList
          className='photo-details-modal--images'
          photos={similarPhotos}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          clickedPhoto={clickedPhoto}
          expandModal={expandModal}
        />
      </div>
    </div>
  );
};

// Define prop type validations
PhotoDetailsModal.propTypes = {
  clickedPhoto: PropTypes.array.isRequired,
  expandModal: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;
