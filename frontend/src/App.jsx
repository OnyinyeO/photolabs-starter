import React from 'react';
import './App.scss';
import useApplicationData from './Hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
// import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosOfTopic,
  } = useApplicationData();

  return (
    <div className='App'>
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favorites={state.favorites}
        clickedPhoto={state.clickedPhoto}
        toggleFavorite={updateToFavPhotoIds}
        toggleNotification={state.isNotificationActive}
        toggleModal={setPhotoSelected}
        getPhotosOfTopic={getPhotosOfTopic}
      />
      {/* { { {state.clickedPhoto.length > 0 && (
        <PhotoDetailsModal
          clickedPhoto={state.clickedPhoto}
          toggleModal={onClosePhotoDetailsModal}
          favorites={state.favorites}
          toggleFavorite={updateToFavPhotoIds}
        />
      )} } } */}
    </div>
  );
};
export default App;
