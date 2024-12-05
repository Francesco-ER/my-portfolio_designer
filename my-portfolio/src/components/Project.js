import React from 'react';
import './_Project.scss';

const Project = ({ title, description, image }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Project;