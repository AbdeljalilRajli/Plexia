import React from 'react';

const PlaceholderImage = ({ width = "400", height = "300", text = "Image", className = "" }) => {
  return (
    <div 
      className={`bg-gray-200 flex items-center justify-center text-gray-500 font-medium ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {text}
    </div>
  );
};

export default PlaceholderImage;
