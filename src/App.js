import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="wrapper">
        <nav className="navigation">
          <div className="container">
            <div className="row">
              <div className="column">
                <a className="navigation-video button-clear navText"
                   href="https://www.youtube.com/watch?v=9-CsmOtciTA&list=PL8C0vBBolbXEsU61g07w9NsHZ-2lq4UCD">
                  Videos
                </a>
              </div>
              <div className="column">
                <a className="navigation-code button-clear navText" href="https://github.com/limmabean">
                  Code
                </a>
              </div>
              <div className="column">
                <a className="navigation-me button-clear navText" href="./index.html">
                  <img className="icon" src="./images/icon.png" alt="Home"></img>
                </a>
              </div>
              <div className="column">
                <a className="navigation-resume button-clear navText" href="./pages/resume.html">
                  Resume
                </a>
              </div>
              <div className="column">
                <a className="navigation-writing button-clear navText" href="./pages/writingPortfolio.html">
                  Writing
                </a>
              </div>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}

export default App;
