import { useEffect, useState } from 'react';

const BaseUrl = 'http://localhost:8001';

const useApplicationData = () => {
  const [photoData, setPhotoData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState([]);

  const updateToFavPhotoIds = (id) => {
    if (favorites.includes(id)) {
      const result = favorites.filter((item) => item !== id);
      setFavorites(result);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const setPhotoSelected = (id) => {
    if (clickedPhoto.length > 0) {
      setClickedPhoto([]);
    } else {
      const result = photoData.filter((photo) => photo.id === id);
      setClickedPhoto(result);
    }
  };

  //when close button on modal is clicked, clear clickedPhoto array.
  const onClosePhotoDetailsModal = () => {
    setClickedPhoto([]);
  };

  //if favorites state has at least 1 photo, then show notification.
  const isNotificationActive = favorites.length > 0;

  /*
GET PHOTOS AND TOPICS FROM API
*/
  //GET PHOTOS FROM API BASED ON THE CLICKED TOPIC/LOGO
  const getPhotosOfTopic = (topicID) => {
    if (topicID === 'logo') {
      setSelectedTopic([]);
    } else {
      setSelectedTopic([topicID]);
    }
  };

  useEffect(() => {
    if (selectedTopic.length === 0) {
      fetch(`${BaseUrl}/api/photos`)
        .then((response) => response.json())
        .then((data) => {
          setPhotoData([...data]);
        });
      return;
    }
    if (selectedTopic.length > 0) {
      fetch(`${BaseUrl}/api/topics/photos/${selectedTopic[0]}/`)
        .then((response) => response.json())
        .then((data) => {
          setPhotoData([...data]);
        });
      return;
    }
  }, [selectedTopic]);

  //GET TOPICS FROM API
  useEffect(() => {
    fetch(`${BaseUrl}/api/topics`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTopicData([...data]);
      })
      .catch((e) => console.error('There was an error', e));
  }, [topicData]);

  const state = {
    favorites,
    clickedPhoto,
    isNotificationActive,
    photoData,
    topicData,
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosOfTopic,
  };
};

export default useApplicationData;
