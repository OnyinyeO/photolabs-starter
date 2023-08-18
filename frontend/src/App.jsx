import React from 'react';
import './App.scss';
import useApplicationData from './Hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const {
    state,
    addToFavPhotos,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotos,
  } = useApplicationData();

  return (
    <div className='App'>
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favorites={state.favorites}
        clickedPhoto={state.clickedPhoto}
        toggleFavorite={addToFavPhotos}
        showNotification={state.showNotification}
        expandModal={setPhotoSelected}
        getPhotos={getPhotos}
      />
      {state.clickedPhoto.length > 0 && (
        <PhotoDetailsModal
          clickedPhoto={state.clickedPhoto}
          expandModal={onClosePhotoDetailsModal}
          favorites={state.favorites}
          toggleFavorite={addToFavPhotos}
        />
      )}
    </div>
  );
};

export default App;
