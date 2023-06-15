import React, { useContext } from 'react'
import ProfileBtnNavigate from '../components/ProfileBtnNavigate';
import { Context } from '../index';
import { ADD_CHAPTER_ROUTE, ADD_TITLE_ROUTE, DARK_THEME, EDIT_TITLE_ROUTE } from '../utils/consts';
import girlImG from '../images/girl.jpg'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
const TeamsPages = observer(() => {
	const {titles, theme} = useContext(Context);
	const navigate = useNavigate();
	return (
		<div className='flex flex-col gap-10'>
			<ProfileBtnNavigate/>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col gap-2 '>
					<img className='h-44 object-cover' src={girlImG} alt="" />
					<p className='text-subtitle-bg'>Назва команди</p>
				</div>
				<p className='text-text-bg'>
					Lorem ipsum dolor sit amet ectetur adipisicing elit. Error dolorem veritatis cumque ipsam iure recusandae? Hic in ex mollitia, soluta cumque quia. Quisquam cumque sit, eligendi ab quo veritatis nemo.
				</p>
				<div className='flex w-full'>
					<button
						className={
							`w-full text-text-lg text-center border hover:border-2 
							${theme._theme === DARK_THEME ? 'border-xl-elipse-light' : 'border-dark-theme-btn'} 
							transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`
						}
						onClick={()=> navigate(ADD_TITLE_ROUTE)}
					>
						Додати тайтл
					</button>
				</div>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 justify-items-center md:gap-y-2 lg:gap-y-5'>
					{titles._titles.map((title) => (
						<div className='flex flex-col gap-3 h-[350px] w-36 text-center' key={title.id_title}>
							<img className='w-full h-full max-h-52 object-cover rounded' src={title.image_title} alt={title.name_title} />
							<button
								className={
									`text-text-lg text-center
									${theme._theme === DARK_THEME ? 'bg-button hover:bg-inherit' : 'bg-orange-400 hover:bg-inherit'} 
									hover:border hover:border-solid hover:border-stroke-dark transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`
								}
								onClick={()=> navigate(ADD_CHAPTER_ROUTE)}
							>
								Додати главу
							</button>
							<button
								className={
									`text-text-lg text-center
									${theme._theme === DARK_THEME ? 'bg-button hover:bg-inherit' : 'bg-orange-400 hover:bg-inherit'} 
									hover:border hover:border-solid hover:border-stroke-dark transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`
								}
								onClick={()=> navigate(EDIT_TITLE_ROUTE + '/' + title.id_title)}
							>
								Редагувати
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
})

export default TeamsPages;