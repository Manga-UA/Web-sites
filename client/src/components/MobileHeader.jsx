import React, { useContext, useState } from 'react';
import { CATALOG_ROUTE, DARK_THEME, LIGHT_THEME, LOGIN_ROUTE, MANGA_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Context } from '../index';
import RadioBtnTheme from './RadioBtnTheme';
import CatalogPages from '../pages/CatalogPages';
import { NavLink } from 'react-router-dom';
import SearchMenu from './SearchMenu';

const MobileHeader = ({ isOpen = false }) => {
	// контекст теми  
	const { theme } = useContext(Context);
	// lock body with scrolling
	isOpen ? document.body.classList.add('lock'):document.body.classList.remove('lock');
	return (
		<React.Fragment>
			<div className={`absolute top-0 left-0 right-0 bg-slate-400 opacity-50 z-10 min-h-[100%] ${isOpen ? 'flex' : 'hidden'}`}></div>
			<div className={`absolute top-0 right-0 w-full sm:w-1/2 ${theme._theme === LIGHT_THEME ? "bg-main-light" : "bg-main-dark"}  z-20 justify-center min-h-screen ${isOpen ? 'flex flex-col items-center space-y-4' : 'hidden'}`}>
			<ul className='flex flex-col items-center space-y-4'>
				<li>
				<NavLink className="text-navbar">Рандомчик</NavLink>
				</li>
				<li>
				<NavLink className="text-navbar" to={CatalogPages}>Каталог</NavLink>
				</li>
			</ul>
			<div className='flex flex-col items-center space-y-4'>
				<SearchMenu />

				<RadioBtnTheme />
				<ul className='flex flex-col items-center space-y-4'>
					<li>
						<NavLink
						className="text-text-lg py-[10px] px-[15px] rounded hover:border hover:border-solid hover:border-stroke-dark transition delay-150 duration-300 ease-in-out"
						to={LOGIN_ROUTE}
						>
						Увійти
						</NavLink>
					</li>
					<li>
						<NavLink
						className={`text-text-lg ${theme._theme === DARK_THEME ? "bg-button hover:bg-inherit" : "bg-orange-400 hover:bg-inherit"} rounded py-[10px] px-[15px] hover:border hover:border-solid hover:border-stroke-dark  transition delay-150 duration-300 ease-in-out`}
						to={REGISTRATION_ROUTE}
						>
						Реєстрація
						</NavLink>
					</li>
				</ul>
			</div>
		</div>

		</React.Fragment>
	);
}

export default MobileHeader;
