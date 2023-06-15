import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { ReactComponent as BookIcon } from '../images/book-icon.svg';
import { ReactComponent as BookMarkIcon } from '../images/bookmark-bg-icon.svg';
import { ReactComponent as BookMarkLightIcon } from '../images/bookmark-bg-light-icon.svg';
import { ReactComponent as LikeIcon } from '../images/like-bg-icon.svg';
import { ReactComponent as EyesIcon } from '../images/eyes-bg-icon.svg';
import {
  ARTISTS_ROUTE,
  AUTHOR_ROUTE,
  CHAPTER_ROUTE,
  DARK_THEME,
  TRANSLATOR_ROUTE,
} from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const TitlePages = observer(() => {
  const {
    titles,
    theme,
    chapters,
    artists,
    screenWriters,
    translates,
    status,
  } = useContext(Context);

  const navigate = useNavigate();
 
  return (
    <React.Fragment>
      {titles._titles.map((title) => (
        <div key={title.id_title} >
          <div className='flex flex-col gap-7 '>
            {/* header info */}
            <div className='flex flex-col md:flex-row md:gap-4 lg' >
              <img
                className='max-h-[228px] w-auto md:w-full md:h-full md:min-h-[384px] md:min-w-[512px] lg:min-w-[850px] rounded object-cover'
                src={title.image_title}
                alt={title.name_title}
              />
              <div className='flex flex-col justify-between items-stretch lg:justify-start lg:items-start w-full'>
                <p className='text-title-bg truncate w-40 lg:w-full overflow-ellipsis'>
                  {title.name_title}
                </p>
                <div className='flex flex-col gap-y-9'>
                  {/* Button group */}
                  <div className='order-2 z-10 flex flex-col gap-3'>
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
                  <div className='flex gap-2 lg:justify-start'>
                    {/* Watching */}
                    <span className='flex flex-col items-center gap-3 text-text-md'>
                      <EyesIcon className='h-8' />
                      123
                    </span>
                    {/* Likes */}
                    <span className='flex flex-col items-center gap-3 text-text-md'>
                      <LikeIcon className='h-8' />
                      10
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
                {title.description_title}
              </div>
              <div className='flex flex-col gap-8'>
                {/* chapter info */}
                <div className='flex flex-col gap-2 p-1 lg:p-3 border border-[0.5px] border-stroke-dark rounded h-full max-h-64 lg:max-h-96 lg:w-full overflow-y-auto'>
                  {chapters._chapters.map((chapter) => (
                    <div
                      className='flex justify-between p-3 gap-2 rounded border border-[0.5px] border-stroke-dark cursor-pointer'
                      key={chapter.id_chapter}
					  onClick={() =>
                        navigate(CHAPTER_ROUTE + '/' + chapter.id_chapter)
					}
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
                  ))}
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
                  {screenWriters._screenWriters.map((screenWriter) => (
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
      ))}
    </React.Fragment>
  );
});

export default TitlePages;
