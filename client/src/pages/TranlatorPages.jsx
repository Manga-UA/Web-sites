import React, { useContext } from 'react'
import avatar from '../images/myhero.jpg'
import { Context } from '../index'
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ReactComponent as EyesSMIcon } from '../images/eyes-sm-icon.svg'
import { TITLE_ROUTE } from '../utils/consts';

const TranlatorPages = observer(() => {
	const {titles} = useContext(Context);
	const navigate = useNavigate();
	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col lg:flex-row gap-3 lg:items-center '>
				<img className='h-52 w-auto object-cover max-w-md' src={avatar} alt="" />
				<h4 className='text-title-bg'>Шалений Кохай</h4>
			</div>
			<div className='text-text-lg'>
				Шалений Кохай - незалежна і некомерційна команда з Перекладу Манг/Маньхуа/Манхв.
			</div>
			<div className='grid justify-items-center grid-cols-2 grid-flow-row gap-2 sm:grid-cols-3 md:justify-items-stretch md:grid-cols-4 lg:grid-cols-7 lg:grid-row-4 lg:gap-x-4 lg:gap-y-4'>
				{titles._titles.map((title)=>(
					<div
					className="flex flex-col gap-1 md:h-full sm:w-full w-36  h-72 text-left rounded relative transition delay-150 duration-300 ease-in-out"
					key={title.id_title}
					onClick={()=> navigate(TITLE_ROUTE + '/' + title.id_title)}
				>
					{/* image content */}
					<div className='relative h-full w-full max-h-36 max-h-[215px]'>
						<img
							className="h-full w-full max-h-36 max-h-[215px] object-cover rounded-xl"
							src={title.image_title}
							alt={title.name_title}
						/>
						  <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
						<div className='absolute z-[1] flex gap-1.5 items-center top-[10px] right-[10px] bg-gray-400 opacity-90 p-[5px] rounded-md '>
							<EyesSMIcon/>
							<span className='text-text-sm opacity-100'>321</span>
						</div>
					</div>
					{/* info */}
					<div className='flex gap-1 h-7'>
						<p className="text-text-sm truncate overflow-ellipsis">
							Апокаліпсис
						</p>
						<p className="text-text-sm truncate overflow-ellipsis">
							Хорор
						</p>
					</div>
					<p className="text-text-lg truncate overflow-ellipsis">
						{title.name_title}
					</p>
					<div/>
					</div>
				))}
			</div>
		</div>
	)
})

export default TranlatorPages;