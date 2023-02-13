import React from 'react';
import MuiNavbar from "../components/MuiNavbar";
import '../Gallery.css'

import Img1 from './assets/IN/IN-Chai-1.jpg';
import Img2 from './assets/IN/IN-Chai-2.jpg';
import Img3 from './assets/IN/IN-City-1.jpg';
import Img4 from './assets/IN/IN-City-2.jpg';
import Img5 from './assets/IN/IN-Food-1.jpg';
import Img6 from './assets/IN/IN-Food-2.jpg';
import Img7 from './assets/IN/IN-Food-3.jpg';
import Img8 from './assets/IN/IN-Food-4.jpg';
import Img9 from './assets/IN/IN-Foods.jpg';
import Img32 from './assets/IN/IN-Frag.jpg';
import Img10 from './assets/IN/IN-Glass.jpg';
import Img11 from './assets/IN/IN-Highway.jpg';
import Img12 from './assets/IN/IN-Market-1.jpg';
import Img13 from './assets/IN/IN-Market-2.jpg';
import Img14 from './assets/IN/IN-Market-3.jpg';
import Img15 from './assets/IN/IN-Musium.jpg';
import Img16 from './assets/IN/IN-Park-1.jpg';
import Img17 from './assets/IN/IN-Park-2.jpg';
import Img18 from './assets/IN/IN-Road-1.jpg';
import Img19 from './assets/IN/IN-Road-2.jpg';
import Img20 from './assets/IN/IN-Road-3.jpg';
import Img21 from './assets/IN/IN-School.jpg';
import Img22 from './assets/IN/IN-Shopping-1.jpg';
import Img23 from './assets/IN/IN-Shopping-2.jpg';
import Img24 from './assets/IN/IN-Shopping-3.jpg';
import Img25 from './assets/IN/IN-Sunset.jpg';
import Img26 from './assets/IN/IN-Traffic-1.jpg';
import Img27 from './assets/IN/IN-Traffic-2.jpg';
import Img28 from './assets/IN/IN-Traffic-3.jpg';
import Img29 from './assets/IN/IN-Tree.jpg';
import Img30 from './assets/IN/IN-Truck.jpg';
import Img31 from './assets/IN/IN-Vegitable.jpg';


const India = () => {
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
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
    {
      id: 18,
      imgSrc: Img18,
    },
    {
      id: 19,
      imgSrc: Img19,
    },
    {
      id: 20,
      imgSrc: Img20,
    },
    {
      id: 21,
      imgSrc: Img21,
    },
    {
      id: 22,
      imgSrc: Img22,
    },
    {
      id: 23,
      imgSrc: Img23,
    },
    {
      id: 24,
      imgSrc: Img24,
    },
    {
      id: 25,
      imgSrc: Img25,
    },
    {
      id: 26,
      imgSrc: Img26,
    },
    {
      id: 27,
      imgSrc: Img27,
    },
    {
      id: 28,
      imgSrc: Img28,
    },
    {
      id: 29,
      imgSrc: Img29,
    },
    {
      id: 30,
      imgSrc: Img30,
    },
    {
      id: 31,
      imgSrc: Img31,
    },
    {
      id: 32,
      imgSrc: Img32,
    },
  ]

  return (

    <>
      <MuiNavbar />
      <h1 style={{textAlign: 'center'}}>India Gallery</h1>
      <div className='gallery'>
        {data.map((item, index)=>{
          return(
            <div className='pics' key={index}>
              <img src={item.imgSrc}  alt="india" style={{width: '100%'}} />
            </div>
          )

        })}

      </div>
    </>
  );
};

export default India