import React from 'react'
import TypesManga from '../components/TypesManga';
import MostPopular from '../components/MostPopular';
import Recomendation from '../components/Recomendation';


const Manga = () => {
  return (
	<div className='flex-grow flex flex-col gap-10'>
		<Recomendation/>
		<MostPopular/>
		<TypesManga/>
	</div>
  )
}

export default Manga;