import React, { useContext, useState, } from 'react'
import {NavLink} from 'react-router-dom'
import { ReactComponent as LogoIcon } from '../images/Logo.svg'

import { CATALOG_ROUTE, DARK_THEME, LIGHT_THEME, LOGIN_ROUTE, MANGA_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import RadioBtnTheme from './RadioBtnTheme';
const Header = observer(() => {
	// стан пошуку
	const [serchTerm, setSearchTerm] = useState('');
	// контекст теми  
	const {theme} = useContext(Context);

	// Обробник події пошуку
	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	}
	
	return (
		
		<header className='flex justify-between items-center h-[90px]'>
			<div className='flex gap-[50px] items-center'>
				<NavLink to={MANGA_ROUTE}><LogoIcon/></NavLink>
				<ul className='flex gap-[50px]'>
					<li>
						<NavLink className="text-navbar">Рандомчик</NavLink>
					</li>
					<li>
						<NavLink  className="text-navbar" to={CATALOG_ROUTE}>Каталог</NavLink>
					</li>
				</ul>
		 	</div>
			<div className='flex space-x-10 items-center'>
				<input 
					className={`px-1 bg-inherit ${theme._theme === LIGHT_THEME ? 'placeholder:text-inherit' : 'placeholder:text-font'} placeholder:text-end border border-solid border-stroke-dark rounded-[5px]`} 
					type="search" 
					name="titleSerch" 
					value={serchTerm} 
					onChange={handleSearchChange} 
					placeholder='Пошук'
				/>
				
				<RadioBtnTheme/>
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
			</div>
		</header>
	)
})

export default Header