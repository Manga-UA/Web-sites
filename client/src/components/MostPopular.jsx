import React from 'react'
import { ReactComponent as ArrowIcon } from '../images/arrow.svg'
import MostPopularItem from './MostPopularItem'
import { CATALOG_ROUTE } from '../utils/consts'
import { useNavigate } from 'react-router-dom'

const MostPopular = () => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col min-w-0'>
			<h2 className='text-title-bg'>Найпопулярніші</h2>
			<MostPopularItem/>
			<button className='flex items-center gap-x-[10px] self-end' onClick={()=> navigate(CATALOG_ROUTE)}>
				<p className='text-lg'>Більше</p>
				<ArrowIcon/>
			</button>
		</div>
	)
}

export default MostPopular