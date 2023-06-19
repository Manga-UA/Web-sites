import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { ReactComponent as BookIcon } from '../images/book-icon.svg';
import { ReactComponent as BookMarkIcon } from '../images/bookmark-bg-icon.svg';
import { ReactComponent as BookMarkLightIcon } from '../images/bookmark-bg-light-icon.svg';
import { ReactComponent as LikeIcon } from '../images/like-bg-icon.svg';
import { ReactComponent as EyesIcon } from '../images/eyes-bg-icon.svg';
import imgBgTitle from '../images/background-title.jpg';
import {
  ARTISTS_ROUTE,
  AUTHOR_ROUTE,
  DARK_THEME,
  TRANSLATOR_ROUTE,
  CHAPTER_ROUTE,
} from '../utils/consts';
import { useNavigate } from 'react-router-dom';

import {useParams} from 'react-router-dom'
import { fetchOneTitles,fetchChapter } from '../http/titleApi';
import { addMarker } from '../http/userApi';
import { fetchScreenWriter } from '../http/createApi';

const TitlePages = observer(() => {
  const {
    user,
    theme,
    chapters,
    artists,
    screenWriters,
    translates,
    status,
  } = useContext(Context);
  const [titles, setTitles] = useState({})

  const {id} = useParams()
  const titleDatumIdTitle = id
  console.log(titleDatumIdTitle)
  useEffect(()=>{
    fetchOneTitles(id).then(data => setTitles(data))
  },[id])

  useEffect(()=>{
    fetchChapter(titleDatumIdTitle).then(data => chapters.setChapters(data.rows))
	fetchScreenWriter().then(data => screenWriters.setScreenWriter(data.rows))
  },[titleDatumIdTitle])

  const addBookmark = async ()=>{
    console.log(user.user.id_user);
    console.log(titleDatumIdTitle);
    const response = await addMarker(user.user.id_user,titleDatumIdTitle);
    return console.log(response)
  }



  const navigate = useNavigate();
  
	// let firstChapter = undefined
	// тут должен быть другой значение
	let firstChapter = 1

	if(chapters._chapters[0]){
		firstChapter = chapters._chapters[0].id_chapter
	}
	console.log(chapters.chapters.length)


  return (
    <React.Fragment>   
        <div key={titles.id_title} >
          <div className='flex flex-col gap-7 '>
            {/* header info */}
            <div className='flex flex-col md:flex-row md:gap-4 lg:justify-start' >
				{/* max-h-[228px] w-full md:w-full md:h-full md:min-h-[384px] md:min-w-[512px] */}
				<div className='max-h-max max-w-xs'>
					<img
						className='w-full h-full rounded'
						src={process.env.REACT_APP_API_URL + titles.image_title}
						alt={titles.name_title}
					/>
				</div>
             
              <div className='flex flex-col justify-between items-stretch lg:justify-start lg:items-start w-full'>
                <p className='text-title-bg text-start truncate w-40 lg:w-full overflow-ellipsis'>
                  {titles.name_title}
                </p>
                <div className='flex flex-col gap-y-9 items-start'>
                  {/* Button group */}
                  <div className='order-2 z-10 flex flex-col justify-start gap-3'>
                    <button
                      className={`flex gap-4 text-text-lg border border-solid border-stroke-dark ${
                        theme._theme === DARK_THEME
                          ? 'hover:bg-sm-elipse-dark'
                          : 'hover:bg-orange-400'
                      } transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
                      onClick={addBookmark}
                    >
                      <BookMarkLightIcon />
                      Зберегти
                    </button>
					{
						chapters.chapters.length > 0 ? (
							<button
								className={`flex gap-4 text-text-lg ${
									theme._theme === DARK_THEME
									? 'bg-button hover:bg-inherit'
									: 'bg-orange-400 hover:bg-inherit'
								} hover:border hover:border-solid hover:border-stroke-dark transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
								onClick={()=> navigate(CHAPTER_ROUTE + '/' + firstChapter)}
							>
							<BookIcon />
							Читати
							</button>
						) :
						(
							<div className='space-y-3'>
								<button
									className={`flex gap-4 text-text-lg opacity-50 pointer-events-none ${
										theme._theme === DARK_THEME
										? 'bg-button hover:bg-inherit'
										: 'bg-orange-400 hover:bg-inherit'
									} hover:border hover:border-solid hover:border-stroke-dark transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
									
								>
								<BookIcon />
								Читати
								</button>
								<p className='text-text-sm'>Цей тайтл поки не  можливо прочитати</p>
							</div>
						)
					}
                    
                  </div>
                  {/* Info Panel */}
                  <div className='flex gap-2 lg:justify-end'>
                    {/* Watching */}
                    <span className='flex flex-col items-center gap-3 text-text-md'>
                      <EyesIcon className='h-8' />
                      {titles.views}
                    </span>
                    {/* Likes */}
                    <span className='flex flex-col items-center gap-3 text-text-md'>
                      <LikeIcon className='h-8' />
                      {titles.rating}
                    </span>
                    {/* Bookmark */}
                    <span className='flex flex-col items-center gap-3 text-text-md'>
                      <BookMarkIcon className='h-8' />
                      2
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* info in title with detail */}
            <div className='flex flex-col gap-3 md:flex-row md:justify-between'>
              <div className='md:max-w-[60%] w-full'>
                {titles.description_title}
              </div>
              <div className='flex flex-col gap-8'>
                {/* chapter info */}
                <div className='flex flex-col gap-2 p-1 lg:p-3 border border-[0.5px] border-stroke-dark rounded h-full max-h-64 lg:max-h-96 lg:w-full overflow-y-auto'>
				{chapters.chapters.length > 0 ? (
					chapters._chapters.map((chapter) => (
						<div
						className='flex justify-between p-3 gap-2 rounded border border-[0.5px] border-stroke-dark cursor-pointer'
						key={chapter.id_chapter}
						onClick={()=>navigate(CHAPTER_ROUTE + '/' + chapter.id_chapter)}
						>
						<p className='text-text-bg lg:text-subtitle-sm'>
							Глава № {chapter.number_chapter}
						</p>
						<p className='text-text-md lg:text-text-lg truncate w-20 lg:max-w-[135px]'>
							{chapter.name_chapter}
						</p>
						<p className='text-text-md lg:text-text-lg'>
							{chapter.date_release_chapter}
						</p>
						</div>
					))
					) 
					: 
					(
					<p>Немає доступних глав</p>
					)}
                </div>
                {/* info creators */}
                <div className='flex flex-col gap-3 p-4 border border-[0.5px] border-stroke-dark rounded'>
                  {artists._artists.map((artist) => (
                    <p
                      className='text-subtitle-sm cursor-pointer'
                      key={artist.id_artist}
                      onClick={() =>
                        navigate(ARTISTS_ROUTE + '/' + artist.id_artist)
                      }
                    >
                      Художник: {artist.name_artist}
                    </p>
                  ))}
                  {screenWriters.screenWriters.map((screenWriter) => (
                    <p
                      className='text-subtitle-sm cursor-pointer'
                      key={screenWriter.id_screenwriter}
                      onClick={() =>
                        navigate(AUTHOR_ROUTE + '/' + screenWriter.id_screenwriter)
                      }
                    >
                      Автор: {screenWriter.name_screenwriter}
                    </p>
                  ))}
                  {translates._translates.map((translate) => (
                    <p
                      className='text-subtitle-sm cursor-pointer'
                      key={translate.id_translate}
                      onClick={() =>
                        navigate(TRANSLATOR_ROUTE + '/' + translate.id_translate)
                      }
                    >
                      Перекладач: {translate.name_translate}
                    </p>
                  ))}
                  {status._status.map((state) => (
                    <p className='text-subtitle-sm' key={state.id_status}>
                      Статус: {state.name_status}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
  </React.Fragment>

  );
});

export default TitlePages;