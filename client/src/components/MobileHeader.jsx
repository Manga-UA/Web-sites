import React, { useContext } from 'react';
import { CATALOG_ROUTE, DARK_THEME, LIGHT_THEME, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, TITLE_ROUTE } from '../utils/consts';
import { Context } from '../index';
import RadioBtnTheme from './RadioBtnTheme';
import CatalogPages from '../pages/CatalogPages';
import { ReactComponent as ExitDoorIcon } from '../images/exit-door-icon.svg'
import { BrowserRouter, NavLink } from 'react-router-dom';
import SearchMenu from './SearchMenu';
import userIcon from '../images/userIcon.png'
import { observer } from 'mobx-react-lite';
import { useState } from 'react';


const MobileHeader = observer(({ isOpen = false}, setIsOpen) => {
	const { user,theme, titles } = useContext(Context);
	// state rand index
	const [randomIndex, setRandomIndex] = useState(0);

	// ф-ція отриманнн рандомного id тайтлу
	const handleGetRandomIndex = () => {
	  const min = 0;
	  const max = titles._titles.length;
	  const newIndex = Math.floor(Math.random() * (max - min)) + min;
	  setRandomIndex(newIndex);
	  setIsOpen(!isOpen)
	};

	const singOut = async()=>{
		user.setUser ({});
		user.setIsAuth(false);				
	}
	return (
		<React.Fragment>
			<div className={`absolute top-0 left-0 right-0 bg-slate-400 opacity-50 z-10 min-h-[100%] ${isOpen ? 'flex' : 'hidden'}`}></div>
			<div className={`absolute top-0 right-0 w-full sm:w-1/2 ${theme._theme === LIGHT_THEME ? "bg-main-light" : "bg-main-dark"}  z-20 justify-center min-h-screen ${isOpen ? 'flex flex-col items-center space-y-4' : 'hidden'}`}>
				<ul className='flex flex-col items-center space-y-4'>
					<li>
					
						<NavLink 
							className="text-navbar"
							onClick={handleGetRandomIndex}
							to={TITLE_ROUTE + '/' + randomIndex}
						>
							Рандомчик
						</NavLink>
					</li>
					<li>
					<NavLink 
						className="text-navbar" 
						to={CATALOG_ROUTE}
						onClick={()=> isOpen ? setIsOpen(!isOpen) : setIsOpen(isOpen)}
					>
						Каталог</NavLink>
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
								<NavLink
									className="flex flex-col items-center gap-2" 
									to={PROFILE_ROUTE}
								>
										<img className='border border-solid border-stroke-dark rounded-full p-1 h-12 w-12' src={userIcon} alt="userIcon" />
										<p className='h-5 w-[70px] truncate text-text-bg'>Твій нікнейм</p>
									
								</NavLink>
							</li>
							<li>
								<ExitDoorIcon className="cursor-pointer"  onClick={singOut}/>
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
