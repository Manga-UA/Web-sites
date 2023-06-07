import React from 'react'
import { ReactComponent as ArrowIcon } from '../images/arrow.svg'
import MostPopularItem from './MostPopularItem'

const MostPopular = () => {
	return (
		<div className='flex flex-col min-w-0'>
			<h2 className='text-title-bg'>Найпопулярніші</h2>
			<MostPopularItem/>
			<div className='flex items-center gap-x-[10px] self-end'>
				<p className='text-lg'>Більше</p>
				<ArrowIcon/>
			</div>
		</div>
	)
}

export default MostPopular