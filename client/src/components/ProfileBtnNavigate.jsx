import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BOOKMARK_ROUTE, DARK_THEME, SETTINGS_ROUTE, TEAMS_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';


const ProfileBtnNavigate = observer(() => {
	const {theme} = useContext(Context);

	const navigate = useNavigate();
	return (
			<div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
				<button
					className={`text-left text-text-lg border border-solid border-stroke-dark 
						${theme._theme === DARK_THEME ? 'hover:bg-sm-elipse-dark' : 'hover:bg-orange-400' } 
						transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
						onClick={() =>navigate(BOOKMARK_ROUTE)}
				>
					Закладки
				</button>
				<button
					className={`text-left text-text-lg border border-solid border-stroke-dark 
						${theme._theme === DARK_THEME ? 'hover:bg-sm-elipse-dark' : 'hover:bg-orange-400' } 
						transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
						onClick={() =>navigate(SETTINGS_ROUTE)}
				>
					Налаштування
				</button>
				<button
					className={`text-left text-text-lg border border-solid border-stroke-dark 
						${theme._theme === DARK_THEME ? 'hover:bg-sm-elipse-dark' : 'hover:bg-orange-400' } 
						transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
						onClick={() =>navigate(TEAMS_ROUTE)}
				>
					Перекладачі
				</button>
			</div>
	)
})

export default ProfileBtnNavigate