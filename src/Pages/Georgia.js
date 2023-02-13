import React from 'react';
import MuiNavbar from "../components/MuiNavbar";
import '../Gallery.css'

import Img1 from './assets/GE/GE-Building.jpg';
import Img2 from './assets/GE/GE-Center.jpg';
import Img3 from './assets/GE/GE-City-1.jpg';
import Img4 from './assets/GE/GE-City-2.jpg';
import Img5 from './assets/GE/GE-City-3.jpg';
import Img6 from './assets/GE/GE-City-4.jpg';
import Img7 from './assets/GE/GE-Daytime.jpg';
import Img8 from './assets/GE/GE-Food.jpg';
import Img9 from './assets/GE/GE-Hotpool.jpg';
import Img10 from './assets/GE/GE-Night.jpg';
import Img11 from './assets/GE/GE-River.jpg';


const Georgia = () => {
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
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
  ]

  return (

    <>
      <MuiNavbar />
      <h1 style={{textAlign: 'center'}}>Georgia Gallery</h1>
      <div className='gallery'>
        {data.map((item, index)=>{
          return(
            <div className='pics' key={index}>
              <img src={item.imgSrc}  alt="gerogia" style={{width: '100%'}} />
            </div>
          )

        })}

      </div>
    </>
  );
};

export default Georgia