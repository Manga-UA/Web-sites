import React, { useContext, useEffect } from 'react'
import TypesManga from '../components/TypesManga';
import MostPopular from '../components/MostPopular';

import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchTitles } from '../http/titleApi';
import Recomendation from '../components/Recomendation';


const Manga = observer(() => {

	const {titles} = useContext(Context);


	useEffect(()=>{
		fetchTitles().then(data => titles.setTitles((data.rows)));
	},[])

	return (
		<div className='flex-grow flex flex-col gap-10'>
			
			<Recomendation />
			{/* <MostPopular/> */}
			<TypesManga/>
		</div>
	)
})

export default Manga;