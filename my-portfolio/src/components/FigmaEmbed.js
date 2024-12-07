// src/components/FigmaEmbed.js
import React from 'react';
import FigmaEmbed from 'react-figma-embed';

const FigmaEmbedComponent = ({ url, nodeId }) => {
  const embedUrl = `${url}&node-id=${nodeId}`;
  return (
    <div className="figma-embed">
      <FigmaEmbed url={embedUrl} />
    </div>
  );
};


export default FigmaEmbedComponent;