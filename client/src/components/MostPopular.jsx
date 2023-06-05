import React from 'react'
import { ReactComponent as ArrowIcon } from '../images/arrow.svg'
import TitleItem from './TitleItem'

const MostPopular = () => {
	return (
		<div className='flex flex-col'>
			<h2 className='text-title-bg'>Найпопулярніші</h2>
			<TitleItem/>
			<div className='flex items-center gap-x-[10px] self-end'>
				<p className='text-lg'>Більше</p>
				<ArrowIcon/>
			</div>
		</div>
	)
}

export default MostPopular