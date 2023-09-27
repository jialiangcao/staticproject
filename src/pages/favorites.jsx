import React from 'react';

const Favorites = () => {
  return (
    <div className="Favorites">
      <h1>Favorites</h1>
      <h3>Hobbies</h3>
      <p>
        I like playing games. One of my favorite games right now is CS:GO. When I'm not playing games, I like to go outside and work out.
      </p>
      <img src={process.env.PUBLIC_URL + '/csgo.jpeg'} alt="csgo logo" />
      <h3>Interests</h3>
      <p>
        I am a car guy but do not own a car yet. I would want a cool Japanese car. It would be tuned to be fast in order to win races. The one shown below is a Nissan R34 Skyline. It's a historic and iconic car in Japan.
      </p>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pCxP4bINAwA?si=dMFVUWgE6qW_N9bd&amp;start=32" 
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Favorites;
