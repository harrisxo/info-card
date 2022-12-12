import React from 'react';
import './Info.css';

function Info() {
  return (
    <div className="info">
      <div className="info-image">
        <img src="/img-1.png" alt="Matthias Poth" />
      </div>
      <div className="info-content">
        <h3>Matthias Poth</h3>
        <p>Frontend Developer</p>
        <a
          className="info-link"
          href="https://tellmeajokeoriwilleatyou.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          h710 website{' '}
        </a>
        <a href="mailto:sirrah1337@gmail.com">
          <button className="info-button">
            <i className="fa-solid fa-envelope"></i> Email
          </button>
        </a>
      </div>
    </div>
  );
}

export default Info;
