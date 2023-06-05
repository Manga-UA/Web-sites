import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { ReactComponent as BookIcon } from '../images/book-icon.svg';
import { ReactComponent as BookMarkIcon } from '../images/bookmark-bg-icon.svg';
import { ReactComponent as BookMarkLightIcon } from '../images/bookmark-bg-light-icon.svg';
import { ReactComponent as LikeIcon } from '../images/like-bg-icon.svg';
import { ReactComponent as EyesIcon } from '../images/eyes-bg-icon.svg';
import { DARK_THEME } from '../utils/consts';

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
    <div className="flex gap-10">
      {titles._titles.map((title) => (
        <div
          className="flex flex-col gap-4 w-40 h-72 text-left rounded relative transition delay-150 duration-300 ease-in-out"
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
                  ? '-right-10px rounded-l-[5px]'
                  : '-left-10px rounded-r-[5px]'
              } ${
                offsetRight > window.innerWidth / 2
                  ? '-left-10px rounded-r-[5px]'
                  : '-right-10px rounded-l-[5px]'
              } z-10 absolute top-0 bg-[rgba(69, 69, 69, 0.1)] border border-solid border-dark-theme-btn backdrop-filter backdrop-blur-[5px] space-y-[18px] text-left p-[10px] transition delay-150 duration-300 ease-in-out`}
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
      ))}
    </div>
  );
};

export default TitleItem;
