import React from 'react';
import Project from '../components/Project';
//import brHomeokeropImg from '../assets/images/bo_mobile.jpg';
import './_Home.scss';
const projects = [
  {
   title: 'Broker Opiniones Web Design',
    description: 'A comprehensive and user-friendly website design for Broker Opiniones, focusing on detailed reviews and comparisons of various brokers. Check out our design to see how we achieve this.',
    //image: brokeropImg,
    figmaUrl: 'https://www.figma.com/design/dYEuNL4fPOeFcYvjJCwejF/www.brokeropiniones.com?node-id=1-3&t=xrdVnOGkPTYty04k-1',
    nodeId: '1605-2142'
  },
  {
    title: 'Tuvalca Store Design',
    description: 'A modern and responsive web design for Tuvalca, focusing on providing a seamless shopping experience. Our team delivers high-quality solutions tailored to meet your business needs.',
    //image: project1Image,
    figmaUrl: 'https://www.figma.com/file/zgCc1ZcChJVJoxo7TFA2xQ/Tuvalca_Web_Desing',
  nodeId: '2104-2901'
  },
  {
    title: 'DevFY Web Design',
   description: 'A comprehensive and user-friendly website design for Broker Opiniones, focusing on detailed reviews and comparisons of various brokers. Check out our design to see how we achieve this.',
    //image: project1Image,
    figmaUrl: 'https://www.figma.com/design/1q8gNXEWLte8FWv2eJEBTj/DevFY_web?node-id=0-1&t=t6ZsjFp5KLyaRhBt-1',
  nodeId: '78-179'
  }
  // Add more projects here
];

const Home = () => (
  <main>
    <section id="home">
      <h2>Welcome to my portfolio</h2>
      <p>UI Designer with experience in creative projects.</p>
    </section>
    <section class='section-projects' id="projects">
      <h2>Projects</h2>
      <div class='container-projects'>

      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      </div>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: example@example.com</p>
    </section>
  </main>
);

export default Home;