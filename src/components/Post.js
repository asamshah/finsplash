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
  } else if (diffInSeconds < 604800) { // Less than 7 days
    return `${Math.floor(diffInSeconds / 86400)} d`;
  } else if (diffInSeconds < 2592000) { // Less than 30 days
    return `${Math.floor(diffInSeconds / 604800)} w`;
  } else if (diffInSeconds < 31536000) { // Less than 365 days
    return `${Math.floor(diffInSeconds / 2592000)} mo`;
  } else {
    return `${Math.floor(diffInSeconds / 31536000)} y`;
  }
};

const Post = ({ photo }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user">
          <img src={photo.user.profile_image.small} alt={photo.user.name} className="post-avatar" />
          <div className="post-user-info">
            <a 
              href={`https://unsplash.com/@${photo.user.username}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="post-username"
            >
              {photo.user.name}
            </a>
            <span className="post-location">{photo.user.location}</span>
          </div>
        </div>
        <span className="post-date">{formatTimeAgo(photo.created_at)}</span>
      </div>
      <div className="post-image">
        <a 
          href={photo.links.html} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={photo.urls.regular} alt={photo.alt_description} />
        </a>
      </div>
      <div className="post-footer">
        <div className="post-actions">
        </div>
        <p className="post-description">{photo.description || photo.alt_description}</p>
      </div>
    </div>
  );
};

export default Post;