import React from 'react';
import './Post.css';

const formatTimeAgo = (date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} s`;
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)} m`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)} h`;
  } else {
    return `${Math.floor(diffInSeconds / 86400)} d`;
  }
};

const Post = ({ photo }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user">
          <img src={photo.user.profile_image.small} alt={photo.user.name} className="post-avatar" />
          <div className="post-user-info">
            <span className="post-username">{photo.user.name}</span>
            <span className="post-location">{photo.user.location}</span>
          </div>
        </div>
        <span className="post-date">{formatTimeAgo(photo.created_at)}</span>
      </div>
      <div className="post-image">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
      <div className="post-footer">
        <p className="post-description">{photo.description || photo.alt_description}</p>
      </div>
    </div>
  );
};

export default Post;