import React from 'react';
import './_Project.scss';
import FigmaEmbedComponent from './FigmaEmbed';

const Project = ({ title, description, image, figmaUrl, nodeId }) => (
  <div className="project">
    {/* <img src={image} alt={title} /> */}
    {figmaUrl && (
      <FigmaEmbedComponent url={figmaUrl} nodeId={nodeId} />
    )}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Project;