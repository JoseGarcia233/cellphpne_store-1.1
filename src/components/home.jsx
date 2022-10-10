import React from 'react';
import '../css/imgSlide.css';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const img = 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-max-5.jpg';
    const img2 = 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-2.jpg';
    const img3 = 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel7-2.jpg';
    const img4 = 'https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge30-neo-1.jpg';
    let nav = useNavigate();

    const handleFullview = () => {
        nav('/Listcellp');
    };
  return (
    <div className="containerMain">
      
        <div className="continerSld">
          <h3>Preview cell phones</h3>
        <div className="center slide">
          <img src={img} alt="picture1"/>
          <img src={img2} alt="picture2"/>
            <img src={img3} alt="picture3"/>
              <img src={img4} alt="pict3"/>
              <img src="https://media.kitsu.io/anime/poster_images/6/large.jpg" alt="pict4"/>
              </div>
              <button className="btn2" onClick={handleFullview}>Full View</button>
            </div>
  
    
      </div>
  )
}
