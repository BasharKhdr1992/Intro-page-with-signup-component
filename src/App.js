import React from 'react';
import SignupComponent from './SignupComponent';
import './App.css';

const App = () => {
  return (
    <div className="wrapper" role="main">
      <div className="Intro">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real time. watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </div>
      <SignupComponent />
    </div>
  );
};

export default App;
