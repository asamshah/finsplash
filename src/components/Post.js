// src/components/Post.js
import React from 'react';
import { EyeIcon } from 'lucide-react';
import './Post.css';

const Post = ({ photo }) => {
  return (
    <article className="post">
      <header className="post-header">
        <div className="post-user">
          <img src={photo.user.profile_image.small} alt={photo.user.name} className="post-avatar" />
          <div className="post-user-info">
            <p className="post-username">{photo.user.name}</p>
            <p className="post-location">{photo.user.location || 'Unknown location'}</p>
          </div>
        </div>
      </header>
      <div className="post-image">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
      <footer className="post-footer">
        <div className="post-actions">
          <div className="post-views">
            <EyeIcon />
            <span>{photo.views || 0}</span>
          </div>
        </div>
        <div className="post-description">{photo.description || photo.alt_description || 'No description available'}</div>
      </footer>
    </article>
  );
};

export default Post;