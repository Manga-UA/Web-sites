import React, { useContext,useState } from 'react'
import ProfileBtnNavigate from '../components/ProfileBtnNavigate';
import Recomendation from '../components/Recomendation';
import { Context } from '../index';
import userIcon from '../images/userIcon.png'
import { DARK_THEME } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { login,updatePassword,updateImage } from '../http/userApi'

const UserSettingsPages = observer(() => {
	const {user,theme} = useContext(Context);

	const[password_user, setPassword] = useState('')
	const[password_user2, setPassword2] = useState('')
	const[imageUser, setImage] = useState(null)

	const selectedFile = e =>{
		setImage(e.target.files[0])
	}

	const updateImages=()=>{
		const formData = new FormData()
		formData.append('id_user',`${user.user.id_user}`)
		formData.append('image_user',imageUser)
		updateImage(formData).then()
		console.log()
	}
	const updatePass=()=>{
		const formData = new FormData()
		console.log(user.user.id_user)
		console.log(password_user)
		formData.append('id_user',`${user.user.id_user}`)
		formData.append('password_user',`${password_user}`)
		console.log(formData)
		updatePassword(formData)
	}

	// Обработчик отправки формы
	const handleSubmit = (event) => {
		event.preventDefault();
		// Добавьте вашу логику для отправки формы или выполнения других действий
		// ...
	  };

	return (
	<div className='flex flex-col gap-10'>
		<ProfileBtnNavigate/>
		<div className='flex flex-col md:flex-row md:justify-between gap-5'>
			{/* Forms */}
			<div className='order-2 md:order-1 flex flex-col gap-5'>
				<div className='flex flex-col gap-2'>
					<h5 className='text-subtitle-sm'>Змінити пароль</h5>
					<form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
						<input 
							className='h-9 bg-transparent rounded px-1 border border-stroke-dark placeholder:text-inherit' 
							type="password" 
							name=""
							placeholder='Пароль' 
							id="pass" 
							value={password_user}
							onChange={e=> setPassword(e.target.value)}
						/>
						<input
							className='h-9 bg-transparent rounded px-1 border border-stroke-dark placeholder:text-inherit' 
							type="password" 
							name="pass" 
							id=""
							placeholder='Підтвердіть пароль' 
							value={password_user2}
							onChange={e=> setPassword2(e.target.value)}
						/>
						<button 
							className={
								`max-w-[100px] text-text-bg border border-solid border-stroke-dark 
								${theme._theme === DARK_THEME ? 'hover:bg-sm-elipse-dark' : 'hover:bg-orange-400' } 
								transition delay-150 duration-300 ease-in-out rounded py-2 px-2` 
							}
							type="submit"
							onClick={updatePass}
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
							onChange={selectedFile}
						/>
						<button 
							className={
								`max-w-[100px] text-text-bg border border-solid border-stroke-dark 
								${theme._theme === DARK_THEME ? 'hover:bg-sm-elipse-dark' : 'hover:bg-orange-400' } 
								transition delay-150 duration-300 ease-in-out rounded py-2 px-2` 
							}
							type="submit"
							onClick={updateImages}
						>
							Оновити
						</button>
					</form>
				</div>
				
			</div>
			{/* info */}
			<div className='order-1 flex flex-col gap-3'>
				<img className='border border-stroke-dark rounded-3xl py-8 px-5 md:py-20 md:px-20' src={ user.isAuth ? process.env.REACT_APP_API_URL + user.user.image_user:{}} alt="" />
				<p className='text-text-lg text-center'>{user.user.login_user}</p>
			</div>
		</div>
		<Recomendation/>
	</div>
  )
})

export default UserSettingsPages;