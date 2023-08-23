import { useEffect, useReducer } from 'react';

const initialState = {
  photoData: [],
  topicData: [],
  favorites: [],
  clickedPhoto: [],
  selectedTopic: [],
  showNotification: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
        showNotification: action.payload.length > 0,
      };
    case 'SET_CLICKED_PHOTO':
      return { ...state, clickedPhoto: action.payload };
    case 'SET_SELECTED_TOPIC':
      return { ...state, selectedTopic: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToFavPhotos = (id) => {
    if (state.favorites.includes(id)) {
      const result = state.favorites.filter((item) => item !== id);
      dispatch({ type: 'SET_FAVORITES', payload: result });
    } else {
      dispatch({ type: 'SET_FAVORITES', payload: [...state.favorites, id] });
    }
  };

  const setPhotoSelected = (id) => {
    if (state.clickedPhoto.length > 0) {
      dispatch({ type: 'SET_CLICKED_PHOTO', payload: [] });
    } else {
      const result = state.photoData.filter((photo) => photo.id === id);
      dispatch({ type: 'SET_CLICKED_PHOTO', payload: result });
    }
  };

  const getPhotos = (topicID) => {
    if (topicID === 'logo') {
      dispatch({ type: 'SET_SELECTED_TOPIC', payload: [] });
    } else {
      dispatch({ type: 'SET_SELECTED_TOPIC', payload: [topicID] });
    }
  };

  useEffect(() => {
    if (state.selectedTopic.length === 0) {
      fetch(`/api/photos`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'SET_PHOTO_DATA', payload: data });
        })
        .catch((error) => {
          console.error('Error fetching photos:', error);
        });
    } else {
      fetch(`/api/topics/photos/${state.selectedTopic[0]}/`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'SET_PHOTO_DATA', payload: data });
        })
        .catch((error) => {
          console.error('Error fetching topic-specific photos:', error);
        });
    }
  }, [state.selectedTopic]);

  useEffect(() => {
    fetch(`/api/topics`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_TOPIC_DATA', payload: data });
      })
      .catch((e) => console.error('There was an error', e));
  }, []);

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: 'SET_CLICKED_PHOTO', payload: [] });
  };

  return {
    state,
    addToFavPhotos,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotos,
  };
};

export default useApplicationData;
