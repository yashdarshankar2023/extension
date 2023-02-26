// // background.js

// chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//     // Get URL of the active tab
//     const url = tabs[0].url;
  
//     // Check if the URL is a YouTube video page
//     if (url.includes('youtube.com/watch')) {
//       // Inject your React component into the page
//       chrome.tabs.executeScript({
//         file: 'content.js',
//       });
//     }
//   });
  