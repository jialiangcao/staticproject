import React from 'react';

const Spots = () => {
  return (
    <div className="Spots">
      <h1>Chicken Stop</h1>
      <p>You can eat chicken and ribs, it is very good and you can get a lot of food for only 10 dollars. It is right next to Tech, on the walk to Dekalb ave. I recommend you give it a try.</p>
      <img className="food" src={process.env.PUBLIC_URL + "/chickestop.jpeg"}></img>
      <h1>Central Park</h1>
      <p>It is a nice refreshment from the constant concrete and pavement. You can scare squirrels or something. Below is a nice arial view of central park, along with a calming soundtrack of nature.</p>
      <img src={process.env.PUBLIC_URL + "/centralpark.webp"}></img>
      <br></br>
      <audio controls src={process.env.PUBLIC_URL + "/nature.mp3"}></audio>
    </div>
  );
};

export default Spots;
