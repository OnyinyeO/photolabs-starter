import React from 'react';
import TopicList from 'components/TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  return (
    <div className='top-nav-bar'>
      <p
        className='top-nav-bar__logo'
        onClick={() => props.getPhotosOfTopic('logo')}
      >
        PhotoLabs
      </p>
      <TopicList
        topics={props.topics}
        toggleNotification={props.toggleNotification}
        getPhotosOfTopic={props.getPhotosOfTopic}
      />
    </div>
  );
};

export default TopNavigation;
