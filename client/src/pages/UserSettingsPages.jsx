import React, { useContext } from 'react'
import ProfileBtnNavigate from '../components/ProfileBtnNavigate';
import Recomendation from '../components/Recomendation';
import { Context } from '../index';
import userIcon from '../images/userIcon.png'
import { DARK_THEME } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const UserSettingsPages = observer(() => {
	const {user,theme} = useContext(Context);
	return (
	<div className='flex flex-col gap-10'>
		UserSettingsPages
		<ProfileBtnNavigate/>
		<div className='flex flex-col md:flex-row md:justify-between gap-5'>
			{/* Forms */}
			<div className='order-2 md:order-1 flex flex-col gap-5'>
				<div className='flex flex-col gap-2'>
					<h5 className='text-subtitle-sm'>Змінити пароль</h5>
					<form className='flex flex-col gap-2 w-full'>
						<input 
							className='h-9 bg-transparent rounded px-1 border border-stroke-dark placeholder:text-inherit' 
							type="password" 
							name=""
							placeholder='Пароль' 
							id="pass" 
						/>
						<input
							className='h-9 bg-transparent rounded px-1 border border-stroke-dark placeholder:text-inherit' 
							type="password" 
							name="pass" 
							id=""
							placeholder='Підтвердіть пароль' 
						/>
						<button 
							className={
								`max-w-[100px] text-text-bg border border-solid border-stroke-dark 
								${theme._theme === DARK_THEME ? 'hover:bg-sm-elipse-dark' : 'hover:bg-orange-400' } 
								transition delay-150 duration-300 ease-in-out rounded py-2 px-2` 
							}
							type="submit"
						>
							Оновити
						</button>
					</form>
				</div>

				<div className='flex flex-col gap-2'>
					<h5 className='text-subtitle-sm'>Оновити аватар</h5>
					<form className='flex flex-col gap-2 w-full'>
						<input
							className='h-9 bg-transparent rounded px-1 border border-stroke-dark placeholder:text-inherit' 
							type="file" 
							id="file_img"
							placeholder='файл'
						/>
						<button 
							className={
								`max-w-[100px] text-text-bg border border-solid border-stroke-dark 
								${theme._theme === DARK_THEME ? 'hover:bg-sm-elipse-dark' : 'hover:bg-orange-400' } 
								transition delay-150 duration-300 ease-in-out rounded py-2 px-2` 
							}
							type="submit"
						>
							Оновити
						</button>
					</form>
				</div>
				
			</div>
			{/* info */}
			<div className='order-1 flex flex-col gap-3'>
				<img className='border border-stroke-dark rounded-3xl py-8 px-5 md:py-20 md:px-20' src={ user.isAuth ? userIcon : {}} alt="" />
				<p className='text-text-lg text-center'>Твій нікнейм</p>
			</div>
		</div>
		<Recomendation/>
	</div>
  )
})

export default UserSettingsPages;