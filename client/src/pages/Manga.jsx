import React from 'react'
import TypesManga from '../components/TypesManga';
import MostPopular from '../components/MostPopular';


const Manga = () => {
  return (
	<div className='flex-grow'>
		Working manga
		<MostPopular/>
		<TypesManga/>
	</div>
  )
}

export default Manga;