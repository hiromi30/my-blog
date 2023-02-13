import React from 'react';
import MuiNavbar from "../components/MuiNavbar";
import '../Gallery.css'

import Img1 from './assets/VN/VN-Air.jpg';
import Img2 from './assets/VN/VN-Bank.jpg';
import Img3 from './assets/VN/VN-Beach.jpg';
import Img4 from './assets/VN/VN-Beer.jpg';
import Img5 from './assets/VN/VN-Building-1.jpg';
import Img6 from './assets/VN/VN-Building-2.jpg';
import Img7 from './assets/VN/VN-Building-3.jpg';
import Img8 from './assets/VN/VN-Bus-1.jpg';
import Img9 from './assets/VN/VN-Bus-2.jpg';
import Img32 from './assets/VN/VN-Busstation.jpg';
import Img10 from './assets/VN/VN-City.jpg';
import Img11 from './assets/VN/VN-Coffee-1.jpg';
import Img12 from './assets/VN/VN-Coffee-2.jpg';
import Img13 from './assets/VN/VN-Coffee-3.jpg';
import Img14 from './assets/VN/VN-Construction-1.jpg';
import Img15 from './assets/VN/VN-Construction-2.jpg';
import Img16 from './assets/VN/VN-Flag.jpg';
import Img17 from './assets/VN/VN-Food-1.jpg';
import Img18 from './assets/VN/VN-Food-2.jpg';
import Img19 from './assets/VN/VN-Industry.jpg';
import Img20 from './assets/VN/VN-Letter.jpg';
import Img21 from './assets/VN/VN-Load-1.jpg';
import Img22 from './assets/VN/VN-Load-2.jpg';
import Img23 from './assets/VN/VN-Lockdown-1.jpg';
import Img24 from './assets/VN/VN-Lockdown-2.jpg';
import Img25 from './assets/VN/VN-Market-1.jpg';
import Img26 from './assets/VN/VN-Market-2.jpg';
import Img27 from './assets/VN/VN-Market-3.jpg';
import Img28 from './assets/VN/VN-Market-4.jpg';
import Img29 from './assets/VN/VN-Market-5.jpg';
import Img30 from './assets/VN/VN-Market-6.jpg';
import Img31 from './assets/VN/VN-Market-7.jpg';
import Img33 from './assets/VN/VN-Mountain-1.jpg';
import Img34 from './assets/VN/VN-Mountain-2.jpg';
import Img35 from './assets/VN/VN-Newyear-1.jpg';
import Img36 from './assets/VN/VN-Newyear-2.jpg';
import Img37 from './assets/VN/VN-Newyear-3.jpg';
import Img38 from './assets/VN/VN-Newyear-4.jpg';
import Img39 from './assets/VN/VN-Newyear-4.jpg';
import Img40 from './assets/VN/VN-Night.jpg';
import Img41 from './assets/VN/VN-Party.jpg';
import Img42 from './assets/VN/VN-Restrant.jpg';
import Img43 from './assets/VN/VN-Road.jpg';
import Img44 from './assets/VN/VN-Soccerwin.jpg';
import Img45 from './assets/VN/VN-Station-1.jpg';
import Img46 from './assets/VN/VN-Station-2.jpg';
import Img47 from './assets/VN/VN-Station-3.jpg';
import Img48 from './assets/VN/VN-Summer.jpg';
import Img49 from './assets/VN/VN-Trafic.jpg';
import Img50 from './assets/VN/VN-Train.jpg';


const Vietnam = () => {
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
    {
      id: 33,
      imgSrc: Img33,
    },
    {
      id: 34,
      imgSrc: Img34,
    },
    {
      id: 35,
      imgSrc: Img35,
    },
    {
      id: 36,
      imgSrc: Img36,
    },
    {
      id: 37,
      imgSrc: Img37,
    },
    {
      id: 38,
      imgSrc: Img38,
    },
    {
      id: 39,
      imgSrc: Img39,
    },
    {
      id: 40,
      imgSrc: Img40,
    },
    {
      id: 41,
      imgSrc: Img41,
    },
    {
      id: 42,
      imgSrc: Img42,
    },
    {
      id: 43,
      imgSrc: Img43,
    },
    {
      id: 44,
      imgSrc: Img44,
    },
    {
      id: 45,
      imgSrc: Img45,
    },
    {
      id: 46,
      imgSrc: Img46,
    },
    {
      id: 47,
      imgSrc: Img47,
    },
    {
      id: 48,
      imgSrc: Img48,
    },
    {
      id: 49,
      imgSrc: Img49,
    },
    {
      id: 50,
      imgSrc: Img50,
    },
  ]

  return (

    <>
      <MuiNavbar />
      <h1 style={{textAlign: 'center'}}>Vietnam Gallery</h1>
      <div className='gallery'>
        {data.map((item, index)=>{
          return(
            <div className='pics' key={index}>
              <img src={item.imgSrc}  alt="vietnam" style={{width: '100%'}} />
            </div>
          )

        })}

      </div>
    </>
  );
};

export default Vietnam