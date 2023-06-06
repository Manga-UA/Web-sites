import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { ReactComponent as BookIcon } from '../images/book-icon.svg';
import { ReactComponent as BookMarkIcon } from '../images/bookmark-bg-icon.svg';
import { ReactComponent as BookMarkLightIcon } from '../images/bookmark-bg-light-icon.svg';
import { ReactComponent as LikeIcon } from '../images/like-bg-icon.svg';
import { ReactComponent as EyesIcon } from '../images/eyes-bg-icon.svg';
import { DARK_THEME } from '../utils/consts';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/autoplay"

// import required modules
import { Autoplay,Pagination } from "swiper";

const TitleItem = () => {
  const { titles } = useContext(Context);
  const { theme } = useContext(Context);
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
    <div>
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1.6,
					spaceBetween: 5,
					slidesPerGroup: 1
				},
				425: {
					slidesPerView: 2.3,
					spaceBetween: 10,
					slidesPerGroup: 1
				},
				640: {
					slidesPerView: 2.6,
					spaceBetween: 20,
					slidesPerGroup: 2
				},
				768: {
					slidesPerView: 3.5,
					spaceBetween: 20,
					slidesPerGroup: 3
				},
				1080: {
					slidesPerView: 4.5,
					spaceBetween: 30,
					slidesPerGroup: 4
				},
				1200: {
					slidesPerView: 5.5,
					spaceBetween: 40,
					slidesPerGroup: 3
				},
				1440: {
					slidesPerView: 5.5,
					spaceBetween: 50,
					slidesPerGroup: 3,
				},
			}}
			pagination={{
				type:'bullets',
				clickable: true,
				dynamicBullets: true,
			}}
			modules={[Autoplay, Pagination]}
			loop={true}
			autoplay={{
				delay:2000,
			}}
			watchOverflow={true}
			loopedSlides={3}
			speed={800}
		>
			{titles._titles.map((title) => (
				<SwiperSlide key={title.id_title}>
					<div
						className="flex flex-col gap-4 w-40 -z-10 h-72 text-left rounded relative transition delay-150 duration-300 ease-in-out"
						onMouseEnter={handleMouseEnter(title.id_title)}
						onMouseLeave={handleMouseLeave}
						key={title.id_title}
					>
					<img
						className="h-full w-full max-h-40 max-h-52 object-cover rounded"
						src={title.image_title}
						alt={title.name_title}
					/>
					<p className="text-text-lg truncate overflow-ellipsis">
						{title.name_title}
					</p>
					{hoveredId === title.id_title && (
						<div
						className={`w-[365px] h-[249px] ${
							offsetLeft > window.innerWidth / 2
							? '-right-10px'
							: '-left-10px'
						} ${
							offsetRight > window.innerWidth / 2
							? '-left-10px'
							: '-right-10px'
						} z-50 absolute top-0 bg-[rgba(69, 69, 69, 0.1)] border border-solid border-dark-theme-btn backdrop-filter backdrop-blur-[5px] space-y-[18px] text-left p-[10px] transition delay-150 duration-300 ease-in-out`}
						>
							{/* text description */}
							<p className="text-medium h-full max-h-[110px] overflow-hidden">
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
				</SwiperSlide>
			))}
		</Swiper>
      
    </div>
  );
};

export default TitleItem;