import React from 'react';
import manbxvaImg from '../images/manbxva.jpg';
import mangaImg from '../images/manga.jpg';
import manxvaImg from '../images/manxva.jpg';
import sketchImg from '../images/sketch.jpg';

const TypesManga = () => {
  return (
    <div>
      <h2 className='text-title-bg'>Комікси</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-y-10 gap-x-10 justify-stretch'>
        <div className='flex relative w-full max-h-[482px] rounded-[35px] '>
          <img src={manbxvaImg} alt='manbxvaImg' className='w-full h-full rounded-[35px] object-top object-cover' />
          <h3 className='text-font-dark ff-title text-logo-bg absolute top-[150px] left-5 md:left-[55px]'>Маньхва</h3>
        </div>
        <div className='flex relative w-full max-h-[482px] rounded-[35px] '>
          <img src={mangaImg} alt='mangaImg' className='w-full h-full rounded-[35px] object-top object-cover' />
          <h3 className='text-font-dark ff-title text-logo-bg absolute top-[150px] left-5 md:left-[55px]'>Манга</h3>
        </div>
        <div className='flex relative w-full max-h-[482px] rounded-[35px] '>
          <img src={manxvaImg} alt='manxvaImg' className='w-full h-full rounded-[35px] object-top object-cover' />
          <h3 className='text-font-dark ff-title text-logo-bg absolute top-[150px] left-5 md:left-[55px]'>Манхва</h3>
        </div>
        <div className='flex relative w-full max-h-[482px] rounded-[35px] '>
          <img src={sketchImg} alt='sketchImg' className='w-full h-full rounded-[35px] object-top object-cover' />
          <h3 className='text-font-dark ff-title text-logo-bg absolute top-[150px] left-5 md:left-[55px]'>Мальописи</h3>
        </div>
      </div>
    </div>
  );
};

export default TypesManga;
