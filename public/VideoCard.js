// import React from 'react';

// const VideoCard = ({ video }) => {
//   // Extract video information
//   const { title, thumbnailUrl } = video;

//   // Handle download button click
//   const handleDownload = () => {
//     // Send message to background script to initiate download process
//     chrome.runtime.sendMessage({ type: 'DOWNLOAD_VIDEO', video });
//   };

//   return (
//     <div className="video-card">
//       <img src={thumbnailUrl} alt={title} className="video-thumbnail" />
//       <div className="video-details">
//         <h3 className="video-title">{title}</h3>
//         <button className="download-button" onClick={handleDownload}>
//           Download
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;
