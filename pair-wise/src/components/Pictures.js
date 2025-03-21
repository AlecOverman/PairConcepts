import React from 'react';
import './Pictures.css';
import AE from './../Pics/AE_pic.png';
import HL from './../Pics/HL_pic.png';
import AO from './../Pics/AO_pic.png';

const profiles = [
  {
    name: "Austin Espinosa",
    imgSrc: AE,
  },
  {
    name: "Hannah Li",
    imgSrc: HL,
  },
  {
    name: "Alec Overman",
    imgSrc: AO,
  },
];

function Pictures() {
  return (
    <div className="profile-container">
      {profiles.map((profile, index) => (
        <div className="profile-card" key={index}>
          <h2>{profile.name}</h2>
          <img src={profile.imgSrc} alt={profile.name} className="profile-image" />
        </div>
      ))}
    </div>
  );
}

export default Pictures;