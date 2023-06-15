import React, { useContext, useState} from 'react'
import {NavLink} from 'react-router-dom'
import { ReactComponent as LogoIcon } from '../images/Logo.svg'
import { ReactComponent as MenuIcon } from '../images/menu-open-icon.svg'
import { ReactComponent as MenuCloseIcon } from '../images/menu-close-icon.svg'
import { ReactComponent as ExitDoorIcon } from '../images/exit-door-icon.svg'

import { CATALOG_ROUTE, DARK_THEME, LOGIN_ROUTE, MANGA_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, TITLE_ROUTE } from '../utils/consts'
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import RadioBtnTheme from './RadioBtnTheme';
import MobileHeader from './MobileHeader'
import SearchMenu from './SearchMenu'
import userIcon from '../images/userIcon.png'
const Header = observer(() => {

	const {theme, titles, user} = useContext(Context);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	// state rand index title
	const [randomIndex, setRandomIndex] = useState(0);
	// function get rand title id 
	const handleGetRandomIndex = () => {
	  const min = 1;
	  const max = titles._titles.length;
	  const newIndex = Math.floor(Math.random() * (max - min)) + min;
	  setRandomIndex(newIndex);
	};
	console.log(user.login_user)
	const singOut = async()=>{
		user.setUser ({})
		user._isAuth = false				
	}

	
	return (
		<header className=' flex justify-between items-center h-16 lg:h-[90px]'>
			{/* Navbar block */}
			<div className='flex gap-6 xl:gap-[50px] items-center'>
				<NavLink to={MANGA_ROUTE}><LogoIcon/></NavLink>
				<ul className='gap-6 xl:gap-[50px] hidden lg:flex'>
					<li>
						<NavLink 
							onClick={handleGetRandomIndex}
							to={TITLE_ROUTE + '/' + randomIndex}
							className="text-navbar">Рандомчик
						</NavLink>
					</li>
					<li>
						<NavLink  className="text-navbar" to={CATALOG_ROUTE}>Каталог</NavLink>
					</li>
				</ul>
		 	</div>
			{/* Button block */}
			<div className='gap-x-3 xl:gap-10 items-center hidden lg:flex'>
				<SearchMenu/>
				{/* Btn theme */}
				<RadioBtnTheme/>
				{/* Auth and Reg btn */}
				{user.isAuth ?
					<ul className='flex items-center gap-5'>
						<li>
							<NavLink
								className="flex flex-col items-center gap-2" 
								to={PROFILE_ROUTE}
							>
									<img className='border border-solid border-stroke-dark rounded-full p-1 h-12 w-12' src={userIcon} alt="userIcon" />
									<p className='h-5 w-16 truncate text-text-md'>{user.login_user}</p>
								
							</NavLink>
						</li>
						<li>
							<ExitDoorIcon className="cursor-pointer"  onClick={singOut}/>
						</li>
					</ul> 
					:
					<ul className='flex space-x-[10px]'>
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
			{/* Mobile Header */}
			<div 
				className='flex lg:hidden ml-auto cursor-pointer z-30'
				onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}
			>
				{isMobileMenuOpen ? <MenuCloseIcon/> : <MenuIcon/>}
			</div>
			<MobileHeader isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
		</header>
	)
})

export default Header