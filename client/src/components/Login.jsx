import React, { useContext } from 'react'
import girl from '../images/girl.jpg'
import myHero from '../images/myhero.jpg'
import { NavLink } from 'react-router-dom'
import { Context } from '../index'
import { DARK_THEME } from '../utils/consts'
import {ReactComponent as ArrowNext} from '../images/arrow-next-icon.svg'
import { REGISTRATION_ROUTE } from '../utils/consts'

const Login = () => {
		// контекст теми  
	const {theme} = useContext(Context);
	return (
		<div className='flex flex-col justify-center items-center gap-4'>
			{/* title */}
			<h3 className='text-logo-sm md:text-logo-md ff-title'>Нумо авторизуватися!</h3>
			<form action="#" method="get" className='flex flex-col gap-3.5'>
				<input 
					className= {`w-60 h-8 px-3 bg-transparent bg-cover bg-center rounded border-[0.25px] border-stroke-dark ${theme._theme === DARK_THEME ? 'placeholder-font-dark' : 'placeholder-font-light'}`}
					style={{ backgroundImage: `url(${girl})` }} 
					type="text" 
					name="login" 
					id="login" 
					placeholder='Логін' 
					
				/>
				<input 
					className={`w-60 h-8 px-3 rounded bg-black bg-cover bg-center rounded border-[0.25px] border-stroke-dark ${theme._theme === DARK_THEME ? 'placeholder-font-dark' : 'placeholder-font-light'}`}
					style={{ backgroundImage: `url(${myHero})` }} 
					type="password" 
					name="pass" 
					id="pass" 
					placeholder='Пароль'
				/>
			</form>
			<NavLink to={REGISTRATION_ROUTE} className="flex items-center gap-1.5 text-text-bg">
				Реєстрація туди <ArrowNext/>
			</NavLink>
			<NavLink
				className={`text-text-lg ${theme._theme === DARK_THEME ? "bg-button hover:bg-inherit" : "bg-orange-400 hover:bg-inherit"} rounded py-[10px] px-[23px] hover:border hover:border-solid hover:border-stroke-dark  transition delay-150 duration-300 ease-in-out`}
			>
				Тиць тиць і зайшов
			</NavLink>
		</div>
	)
}

export default Login