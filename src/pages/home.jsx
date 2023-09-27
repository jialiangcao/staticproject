import React from 'react';
 
const Home = () => {
    return (
        <div className="Home">
         <h1><img className="logo" src={process.env.PUBLIC_URL + '/logo192.png'} alt="react logo"/> Hello, my name is Jialiang </h1>
         <p>Welcome to my home page. You can click the links to find my favorite things to do and some skills I've acquired. </p>
         <h3>About Me</h3>
         <p>I'm a senior software engineering student at Tech. I'm 17 years old and aspire to be a web developer. I find coding to be a very enjoyable and rewarding hobby. This year I am learning web development and digital electronics. Also I take an IT class to learn to use Linux.</p>
         <img className="secondaryimg" src={process.env.PUBLIC_URL + '/brain.jpeg'} alt="brain"/>
         <img className="secondaryimg" src={process.env.PUBLIC_URL + '/ai.webp'} alt="ai"/>
         <img className="secondaryimg" src={process.env.PUBLIC_URL + '/ai2.jpeg'} alt="ai2"/>
        </div>
    );
};
 
export default Home;