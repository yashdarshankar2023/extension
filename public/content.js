// content.js

import React from 'react';
import ReactDOM from 'react-dom';
import VideoCard from './VideoCard';

// Find the video title and thumbnail URL
const video = {
  title: document.querySelector('h1.title').textContent.trim(),
  thumbnailUrl: document.querySelector('img.ytd-video-primary-info-renderer').src,
};

// Create a container element for your React component
const container = document.createElement('div');
container.id = 'my-extension';
document.body.appendChild(container);

// Render your React component in the container element
ReactDOM.render(<VideoCard video={video} />, container);

