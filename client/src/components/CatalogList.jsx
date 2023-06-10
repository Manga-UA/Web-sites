import React, { useContext } from 'react'
import { Context } from '../index'
import { TITLE_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EyesSMIcon } from '../images/eyes-sm-icon.svg'

const CatalogList = () => {
	const {titles} = useContext(Context);
	const navigate = useNavigate();
	return (
		<React.Fragment>
			{titles._titles.map((title) => (
					<div
						className="flex flex-col gap-1 w-36  h-72 text-left rounded relative transition delay-150 duration-300 ease-in-out"
						// onMouseEnter={handleMouseEnter(title.id_title)}
						// onMouseLeave={handleMouseLeave}
						key={title.id_title}
						onClick={()=> navigate(TITLE_ROUTE + '/' + title.id_title)}
					>
						{/* image content */}
						<div className=' relative h-full w-full max-h-36 max-h-[215px]'>
							<img
								className="h-full w-full max-h-36 max-h-[215px] object-cover rounded-xl"
								src={title.image_title}
								alt={title.name_title}
							/>
		  					<div className="absolute inset-0 bg-black opacity-25 rounded-[35px]"></div>
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
					</div>
			))}
			
		</React.Fragment>
	)
}

export default CatalogList