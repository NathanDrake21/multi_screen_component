import React from 'react';

const DivComponent = ({ width, height, top, left }) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    top: `${top}px`,
    left: `${left}px`,
    position: 'absolute',
    border: '1px solid black', // Optional: Add borders for visualization
    overflow: 'hidden', // To crop the image/video within the div
  };

  const mediaStyle = {
    width: '100%', // Adjust the width and height to cover the entire div
    height: '100%',
    objectFit: 'cover', // This will crop the media to fit within the div
  };

  return (
    <div style={style}>
      <img src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=489&q=80" alt="Media" style={mediaStyle} />
      {/* For video: <video src={mediaUrl} controls style={mediaStyle} /> */}
    </div>
  );
};

export default DivComponent;