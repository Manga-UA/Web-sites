import React, { useContext, useState } from 'react'
import girl from '../images/girl.jpg'
import myHero from '../images/myhero.jpg'
import nightGirl from '../images/night-girl.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { DARK_THEME, LOGIN_ROUTE, MANGA_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { registration } from '../http/userApi'

const Registration = observer(({isLogin}) => {
	// контекст теми  
	const {theme, user} = useContext(Context);
	const navigate = useNavigate();
	const[login_user, setLogin] = useState('')
	const[password_user, setPassword] = useState('')
	const[email, setEmail] = useState('')

	const singUp = async()=>{
		try {
			const response = await registration(login_user,password_user,email);
			user.setUser (response);
			user.setIsAuth(true);
			navigate(MANGA_ROUTE);
		} catch (e) {
			alert(e.response.data.message);
		}
		
	}


	return (
		<div className='flex flex-col justify-center items-center gap-4'>
			{/* title */}
			<h3 className='text-logo-sm md:text-logo-md ff-title'>Приєднуйся!</h3>
			<form action="#" method="get" className='flex flex-col gap-3.5'>
				<input 
					className= {`w-60 h-8 px-3 bg-transparent bg-cover bg-center rounded border-[0.25px] border-stroke-dark ${theme._theme === DARK_THEME ? 'placeholder-font-dark' : 'placeholder-font-light'}`}
					style={{ backgroundImage: `url(${nightGirl})` }} 
					type="email" 
					name="email" 
					id="email" 
					placeholder='Пошта'
					value={email}
					onChange={e=> setEmail(e.target.value)}
				/>
				<input 
				className= {`w-60 h-8 px-3 bg-transparent bg-cover bg-center rounded border-[0.25px] border-stroke-dark ${theme._theme === DARK_THEME ? 'placeholder-font-dark' : 'placeholder-font-light'}`}
				style={{ backgroundImage: `url(${girl})` }} 
				type="text" 
				name="login" 
				id="login" 
				placeholder='Логін' 
				value={login_user}
				onChange={e=> setLogin(e.target.value)}
				/>
				<input 
					className={`w-60 h-8 px-3 rounded bg-black bg-cover bg-center rounded border-[0.25px] border-stroke-dark ${theme._theme === DARK_THEME ? 'placeholder-font-dark' : 'placeholder-font-light'}`}
					style={{ backgroundImage: `url(${myHero})` }} 
					type="password" 
					name="pass" 
					id="pass" 
					placeholder='Пароль'
					value={password_user}
					onChange={e=> setPassword(e.target.value)}
				/>
			</form>
			<NavLink to={LOGIN_ROUTE} className="flex items-center gap-1.5 text-text-bg">
				Увійти в світ манги
			</NavLink>
			<button
				onClick={singUp}
				className={`text-text-lg ${theme._theme === DARK_THEME ? "bg-button hover:bg-inherit" : "bg-orange-400 hover:bg-inherit"} rounded py-[10px] px-[23px] hover:border hover:border-solid hover:border-stroke-dark  transition delay-150 duration-300 ease-in-out`}
			>
				Долучитися
			</button>
		</div>
	)
})

export default Registration