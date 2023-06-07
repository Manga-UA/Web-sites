import React, { useContext} from 'react';
import { DARK_THEME, LIGHT_THEME, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Context } from '../index';
import RadioBtnTheme from './RadioBtnTheme';
import CatalogPages from '../pages/CatalogPages';
import { NavLink } from 'react-router-dom';
import SearchMenu from './SearchMenu';
import userIcon from '../images/userIcon.png'
import { observer } from 'mobx-react-lite';


const MobileHeader = observer(({ isOpen = false }) => {
	// контекст користувача
	const { user } = useContext(Context);

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
				{/* Radio btn theme */}
				<RadioBtnTheme />
				{/* Btn groupe in auth */}
				{user.isAuth ?
					<ul className='flex flex-col items-center space-y-4'>
						<li>
							{/* <NavLink
								className="flex flex-col items-center gap-2" 
								to={PROFILE_ROUTE}
							>
									<img className='border border-solid border-stroke-dark rounded-full p-1 h-12 w-12' src={userIcon} alt="userIcon" />
									<p className='h-5 w-[70px] truncate text-text-bg'>Твій нікнейм</p>
								
							</NavLink> */}
						</li>
					</ul>
					:
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
				}
			</div>
		</div>

		</React.Fragment>
	);
})

export default MobileHeader;
