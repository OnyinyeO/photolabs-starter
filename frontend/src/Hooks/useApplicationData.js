import { useEffect, useState } from 'react';

const BaseUrl = 'http://localhost:8001';

const useApplicationData = () => {
  const [photoData, setPhotoData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState([]);

  //if favorites state has at least 1 photo, then show notification.

  const showNotification = favorites.length > 0;

  // filter photos
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

  // get photos from backend

  const getPhotos = (topicID) => {
    if (topicID === 'logo') {
      setSelectedTopic([]); // No specific topic selected
    } else {
      setSelectedTopic([topicID]); // Set the selected topic
    }
  };

  useEffect(() => {
    if (selectedTopic.length === 0) {
      // Fetch all photos when no specific topic is selected
      fetch(`${BaseUrl}/api/photos`)
        .then((response) => response.json())
        .then((data) => {
          setPhotoData([...data]);
        })
        .catch((error) => {
          console.error('Error fetching photos:', error);
        });
    } else {
      // Fetch photos based on the selected topic
      fetch(`${BaseUrl}/api/topics/photos/${selectedTopic[0]}/`)
        .then((response) => response.json())
        .then((data) => {
          setPhotoData([...data]);
        })
        .catch((error) => {
          console.error('Error fetching topic-specific photos:', error);
        });
    }
  }, [selectedTopic]);

  //get topics from backend
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
    showNotification,
    photoData,
    topicData,
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotos,
  };
};

export default useApplicationData;
