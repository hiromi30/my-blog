import React from 'react';
import MuiNavbar from "../components/MuiNavbar";
import '../Gallery.css'

import Img1 from './assets/TH/TH-Beach-1.jpg';
import Img2 from './assets/TH/TH-Beach-2.jpg';
import Img3 from './assets/TH/TH-Food.jpg';
import Img4 from './assets/TH/TH-Load-1.jpg';
import Img5 from './assets/TH/TH-Load-2.jpg';
import Img6 from './assets/TH/TH-Load-3.jpg';

const Thailand = () => {
  let data =[
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ]

  return (

    <>
      <MuiNavbar />
      <h1 style={{textAlign: 'center'}}>Thailand Gallery</h1>
      <div className='gallery'>
        {data.map((item, index)=>{
          return(
            <div className='pics' key={index}>
              <img src={item.imgSrc}  alt="thailand" style={{width: '100%'}} />
            </div>
          )

        })}

      </div>
    </>
  );
};

export default Thailand