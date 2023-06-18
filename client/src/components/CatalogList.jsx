
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
	const { titles, theme, genresTitle,user } = useContext(Context);
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
  
	const titlesArray = titles.titles;
  
	const fetchGenreInTitle = () => {
	  const titleGenres = titlesArray.map((title) => {
		const keyTitleGenres = genresTitle.genresTitle.filter(
		  (keyTitleGenre) => keyTitleGenre.titleDatumIdTitle === title.id_title
		);
		const genres = keyTitleGenres.map((keyTitleGenre) => {
		  const genreTitle = titles.genre.find(
			(genreTitle) => genreTitle.id_genre === keyTitleGenre.genreTitleIdGenre
		  );
		  return {
			id_genre: genreTitle.id_genre,
			name_genre: genreTitle.name_genre
		  };
		});
		return {
		  id_title: title.id_title,
		  name_title: title.name_title,
		  genres: genres
		};
	  });
	  return titleGenres;
	};
  
	const titleGenres = fetchGenreInTitle();

	let mark=[]
	let i = 0;
	user.marker.map((markerD)=>{
		if (user.marker){
			mark[i]=markerD.titleDatumIdTitle
		i++
		}else{
		}
		console.log(mark)		
	})
	i=0
  
	return (

		
	  <React.Fragment>
		
			
		
		{titlesArray.map((title) => {
			if(mark.length>0 && user._isMarker){
			if (mark[i] == title.id_title){
				console.log(user._isMarker);
				i++
		  const matchedTitle = titleGenres.find((titleGenre) => titleGenre.id_title === title.id_title);
		  if (matchedTitle) {
			return (
			  <div
				className="flex flex-col gap-1 md:h-full sm:w-full w-36 h-72 text-left rounded relative transition delay-150 duration-300 ease-in-out"
				onMouseEnter={handleMouseEnter(title.id_title)}
				onMouseLeave={handleMouseLeave}
				key={title.id_title}
				onClick={() => navigate(TITLE_ROUTE + '/' + title.id_title)}
			  >
				{/* Изображение и контент */}
				<div className='relative h-full w-full max-h-36 max-h-[215px]'>
				  <img
					className="h-full w-full max-h-36 max-h-[215px] object-cover rounded-xl"
					src={process.env.REACT_APP_API_URL + title.image_title}
					alt={title.name_title}
				  />
				  <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
				  <div className='absolute z-[1] flex gap-1.5 items-center top-[10px] right-[10px] bg-gray-400 opacity-90 p-[5px] rounded-md '>
					<EyesSMIcon />
					<span className='text-text-sm opacity-100'>{title.views}</span>
				  </div>
				</div>
				<div className='flex gap-1 h-7'>
				  {/* Жанры */}
				  {matchedTitle.genres.map((genre) => (
					<p key={genre.id_genre}>
					  {genre.name_genre}
					</p>
				  ))}
				  {/* Идентификатор заголовка
				  <p>
					{matchedTitle.id_title}
				  </p> */}
				</div>
				{/* Название заголовка */}
				<p className="text-text-lg truncate overflow-ellipsis">
				  {title.name_title}
				</p>
				{/* Дополнительный контент при наведении */}
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
									{title.views}
								</span>
								{/* Likes */}
								<span className="flex items-center gap-3 text-text-lg">
									<LikeIcon />
									{title.rating}
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
			);
			
		  } else {
			return <p className='text-subtitle-bg'>Нажіль тайтлів не існує!</p>;
		  }
		  
		}}
		else{
			const matchedTitle = titleGenres.find((titleGenre) => titleGenre.id_title === title.id_title);
			if (matchedTitle) {
			  return (
				<div
				  className="flex flex-col gap-1 md:h-full sm:w-full w-36 h-72 text-left rounded relative transition delay-150 duration-300 ease-in-out"
				  onMouseEnter={handleMouseEnter(title.id_title)}
				  onMouseLeave={handleMouseLeave}
				  key={title.id_title}
				  onClick={() => navigate(TITLE_ROUTE + '/' + title.id_title)}
				>
				  {/* Изображение и контент */}
				  <div className='relative h-full w-full max-h-36 max-h-[215px]'>
					<img
					  className="h-full w-full max-h-36 max-h-[215px] object-cover rounded-xl"
					  src={process.env.REACT_APP_API_URL + title.image_title}
					  alt={title.name_title}
					/>
					<div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
					<div className='absolute z-[1] flex gap-1.5 items-center top-[10px] right-[10px] bg-gray-400 opacity-90 p-[5px] rounded-md '>
					  <EyesSMIcon />
					  <span className='text-text-sm opacity-100'>{title.views}</span>
					</div>
				  </div>
				  <div className='flex gap-1 h-7'>
					{/* Жанры */}
					{matchedTitle.genres.map((genre) => (
					  <p key={genre.id_genre}>
						{genre.name_genre}
					  </p>
					))}
					{/* Идентификатор заголовка
					<p>
					  {matchedTitle.id_title}
					</p> */}
				  </div>
				  {/* Название заголовка */}
				  <p className="text-text-lg truncate overflow-ellipsis">
					{title.name_title}
				  </p>
				  {/* Дополнительный контент при наведении */}
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
									  {title.views}
								  </span>
								  {/* Likes */}
								  <span className="flex items-center gap-3 text-text-lg">
									  <LikeIcon />
									  {title.rating}
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
			  );
			  
			} else {
			  return <p className='text-subtitle-bg'>Нажіль тайтлів не існує!</p>;
			}
		}
		
		})}
	  </React.Fragment>
	);
  });
  
  export default CatalogList;
  

