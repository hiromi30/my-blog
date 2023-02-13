import React from 'react';
import MuiNavbar from "../components/MuiNavbar";
import '../Gallery.css'

import Img1 from './assets/CH/CH-Building.jpg';
import Img2 from './assets/CH/CH-City.jpg';
import Img3 from './assets/CH/CH-Drink.jpg';
import Img4 from './assets/CH/CH-Food.jpg';
import Img5 from './assets/CH/CH-Food-2.jpg';
import Img6 from './assets/CH/CH-Hotel.jpg';
import Img7 from './assets/CH/CH-Hotel-2.jpg';
import Img8 from './assets/CH/CH-Market.jpg';
import Img9 from './assets/CH/CH-Market-2.jpg';
import Img10 from './assets/CH/CH-Market-3.jpg';
import Img11 from './assets/CH/CH-Night.jpg';
import Img12 from './assets/CH/CH-River.jpg';
import Img13 from './assets/CH/CH-Road.jpg';


const China = () => {
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
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
  ]

  return (

    <>
      <MuiNavbar />
      <h1 style={{textAlign: 'center'}}>China Gallery</h1>
      <div className='gallery'>
        {data.map((item, index)=>{
          return(
            <div className='pics' key={index}>
              <img src={item.imgSrc}  alt="china" style={{width: '100%'}} />
            </div>
          )

        })}

      </div>
    </>
  );
};

export default China