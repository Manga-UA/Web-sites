import React, { useContext } from 'react'
import { Context } from '../index'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EyesSMIcon } from '../images/eyes-sm-icon.svg'
import { ReactComponent as BookIcon } from '../images/book-icon.svg';
import { ReactComponent as BookMarkIcon } from '../images/bookmark-bg-icon.svg';
import { ReactComponent as BookMarkLightIcon } from '../images/bookmark-bg-light-icon.svg';
import { ReactComponent as LikeIcon } from '../images/like-bg-icon.svg';
import { ReactComponent as EyesIcon } from '../images/eyes-bg-icon.svg';
import { DARK_THEME, TITLE_ROUTE } from '../utils/consts';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';


const CatalogList = observer(() => {
	const {titles,theme} = useContext(Context);
	const navigate = useNavigate();

	const [hoveredId, setHoveredId] = useState(null);
	const [offsetLeft, setOffsetLeft] = useState(0);
	const [offsetRight, setOffsetRight] = useState(0);

	const handleMouseEnter = (id) => (event) => {
		const block = event.target;
		const { offsetLeft, offsetWidth } = block;
		const windowWidth = window.innerWidth;
			setOffsetLeft(offsetLeft);
			setOffsetRight(windowWidth - offsetLeft - offsetWidth);
			setHoveredId(id);
	};
	const handleMouseLeave = () => {
		setHoveredId(null);
	};
	return (
		<React.Fragment>
			{titles._titles.map((title) => (
					<div
						className="flex flex-col gap-1 md:h-full sm:w-full w-36  h-72 text-left rounded relative transition delay-150 duration-300 ease-in-out"
						onMouseEnter={handleMouseEnter(title.id_title)}
						onMouseLeave={handleMouseLeave}
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
						{hoveredId === title.id_title && (
						<div
							className={`w-[365px] h-[249px] 
								${offsetLeft > window.innerWidth / 2 ? '-right-10px' : '-left-10px'} 
								${offsetRight > window.innerWidth / 2 ? '-left-10px' : '-right-10px'}
								absolute top-0 bg-[rgba(69, 69, 69, 0.1)] border border-solid border-dark-theme-btn backdrop-filter
								backdrop-blur-[5px] space-y-[18px] text-left p-[10px] transition delay-150 duration-300 ease-in-out
								z-[5]
							`}
						>
							{/* text description */}
							<p className="z-10 text-medium h-full max-h-[110px] overflow-hidden">
								{title.description_title}
							</p>
							{/* Button group */}
							<div className="flex justify-start gap-[30px]">
								<button
									className={`flex gap-4 text-text-lg border border-solid border-stroke-dark ${
										theme._theme === DARK_THEME
										? 'hover:bg-sm-elipse-dark'
										: 'hover:bg-orange-400'
									} transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
								>
									<BookMarkLightIcon />
									Зберегти
								</button>
								<button
									className={`flex gap-4 text-text-lg ${
										theme._theme === DARK_THEME
										? 'bg-button hover:bg-inherit'
										: 'bg-orange-400 hover:bg-inherit'
									} hover:border hover:border-solid hover:border-stroke-dark transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
								>
									<BookIcon />
									Читати
								</button>
							</div>
							{/* Info Panel */}
							<div className="flex justify-start gap-10">
								{/* Watching */}
								<span className="flex items-center gap-3 text-text-lg">
									<EyesIcon />
									123
								</span>
								{/* Likes */}
								<span className="flex items-center gap-3 text-text-lg">
									<LikeIcon />
									10
								</span>
								{/* Bookmark */}
								<span className="flex items-center gap-3 text-text-lg">
									<BookMarkIcon />
									2
								</span>
							</div>
						</div>
					)}
					</div>
			))}
		</React.Fragment>
	)
})

export default CatalogList