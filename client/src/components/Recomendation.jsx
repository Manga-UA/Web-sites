import React, { useContext } from 'react'
import { ReactComponent as BookIcon } from '../images/book-icon.svg';
import { ReactComponent as BookMarkIcon } from '../images/bookmark-bg-icon.svg';
import { ReactComponent as BookMarkLightIcon } from '../images/bookmark-bg-light-icon.svg';
import { ReactComponent as LikeIcon } from '../images/like-bg-icon.svg';
import { ReactComponent as EyesIcon } from '../images/eyes-bg-icon.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/autoplay"

import { Context } from '../index';
import { Autoplay, Pagination } from 'swiper';
import { observer } from 'mobx-react-lite';
import { DARK_THEME } from '../utils/consts';

const Recomendation = observer(() => {
	const { titles, status, theme } = useContext(Context);
	const filteredTitles = titles._titles.filter((title)=>title.recomend_title);
	return (
		<div>
			<Swiper
				pagination = {{
					type: 'bullets',
					clickable: true,
					dynamicBullets: true,
				}}
				modules={[Autoplay, Pagination]}
				loop={true}
				autoplay={{
					delay:2400,
				}}
				speed={1800}
				className="swiper-container"
			>
				{filteredTitles.map((title) => (
					<SwiperSlide key={title.id_title} >
						<div className='relative' key={title.id_title} >
							<div className="relative">
								<img className='w-full h-full object-cover max-h-[375px] rounded opacity-75' src={title.image_title} alt={title.name_title} />
								<div className="absolute inset-0 bg-black opacity-25"></div>
							</div>
							<div className='absolute left-5 bottom-14 gap-5 flex flex-col'>
								<div className='flex items-center'>
									<h2 className='text-title-bg truncate w-auto max-w-[200px]'>{title.name_title}</h2>
									<p>[status._status]</p>
								</div>
								<div className='relative flex justify-between gap-10'>
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
									{/* Button group */}
									<div className="z-10 flex justify-start gap-[30px]">
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
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
})

export default Recomendation