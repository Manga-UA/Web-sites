import React, { useContext } from 'react'
import { Context } from '../index'
import { observer } from 'mobx-react-lite';
import { ReactComponent as BookIcon } from '../images/book-icon.svg';
import { ReactComponent as BookMarkIcon } from '../images/bookmark-bg-icon.svg';
import { ReactComponent as BookMarkLightIcon } from '../images/bookmark-bg-light-icon.svg';
import { ReactComponent as LikeIcon } from '../images/like-bg-icon.svg';
import { ReactComponent as EyesIcon } from '../images/eyes-bg-icon.svg';
import imgBgTitle from '../images/background-title.jpg'
import { ARTISTS_ROUTE, AUTHOR_ROUTE, DARK_THEME, TRANSLATOR_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const TitlePages = observer(() => {
	const {titles, theme, chapters, artists,screenWriters,translates,status} = useContext(Context);

	const navigate = useNavigate();
	return (
		<React.Fragment>
			{titles._titles.map((title) => (
				<div
					className='flex flex-col gap-16'
					key={title.id_title}
				>
					<div className='absolute top-130 left-0 right-0 z-[-1] w-full' >
						<div>
						<div className="absolute inset-0 bg-black opacity-25"></div>
						<img className='w-full h-full max-h-96 object-cover' src={imgBgTitle} alt="" />
						</div>
					</div>
					{/* надписи и картинка тайтла */}
					<div
						className='flex gap-16 items-end mt-36'
					>
						<img className='h-80 w-56 rounded object-cover' src={title.image_title} alt={title.name_title} />
						<div className='flex flex-col gap-12 w-full'>
							<p className="text-title-bg truncate overflow-ellipsis">
								{title.name_title}
							</p>
							<div className='flex w-full justify-between items-center'>
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
								{/* Info Panel */}
								<div className="flex items-center justify-start gap-2">
									{/* Watching */}
									<span className="flex flex-col items-center gap-3 text-text-md">
										<EyesIcon className='h-8'/>
										123
									</span>
									{/* Likes */}
									<span className="flex flex-col items-center gap-3 text-text-md">
										<LikeIcon className='h-8'/>
										10
									</span>
									{/* Bookmark */}
									<span className="flex flex-col items-center gap-3 text-text-md">
										<BookMarkIcon className='h-8'/>
										2
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* обертка о инфо */}
					<div className='flex justify-between'>
						<div className='max-w-[60%] w-full'>
							{title.description_title}
						</div>
						<div className='flex flex-col gap-8'>
							{/* обертка */}
							<div className='flex flex-col gap-2 p-6 border border-[0.5px] border-stroke-dark rounded max-h-[460px] overflow-y-auto'> 
								{chapters._chapters.map((chapter) => (
									<div
										className='flex justify-between p-4 gap-6 rounded border border-[0.5px] border-stroke-dark'
										key={chapter.id_chapter}
									>
										<p className='text-subtitle-sm'>Глава № {chapter.number_chapter}</p>
										<p className='text-text-lg truncate max-w-[135px]'>{chapter.name_chapter}</p>
										<p className='text-text-lg'>{chapter.date_release_chapter}</p>
									</div>
								))}
							</div>

							<div
								className='flex flex-col gap-3 p-4 border border-[0.5px] border-stroke-dark rounded'
							>
								{artists._artists.map((artist)=>(
									<p className='text-subtitle-sm cursor-pointer' key={artist.id_artist}
										onClick={()=> navigate(ARTISTS_ROUTE + '/' + artist.id_artist)}
									>
										Художник: {artist.name_artist}
									</p>
								))}
								{screenWriters._screenWriters.map((screenWriter)=>(
									<p className='text-subtitle-sm cursor-pointer' key={screenWriter.id_screenwriter}
										onClick={()=> navigate(AUTHOR_ROUTE + '/' + screenWriter.id_screenwriter)}
									>
										Автор: {screenWriter.name_screenwriter}
									</p>
								))}
								{translates._translates.map((translate)=>(
									<p className='text-subtitle-sm cursor-pointer' key={translate.id_translate}
										onClick={()=> navigate(TRANSLATOR_ROUTE + '/' + translate.id_translate)}
									>
										Перекладач: {translate.name_translate}
									</p>
								))}
								{status._status.map((state)=>(
									<p className='text-subtitle-sm' key={state.id_status}>
										Статус: {state.name_status}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			))}			
		</React.Fragment>
	)
})

export default TitlePages;