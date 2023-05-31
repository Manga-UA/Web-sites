import React from 'react'
import {NavLink} from 'react-router-dom'
import { MANGA_ROUTE } from '../utils/consts'
import { ReactComponent as LogoIcon } from '../images/Logo.svg'
import { ReactComponent as TelegramIcon } from '../images/telegram-icon.svg'
import { ReactComponent as InstagramIcon } from '../images/instagram-icon.svg'
import { ReactComponent as TiktokIcon } from '../images/tiktok-icon.svg'

const Footer = () => {
  return (
	<footer className='mt-auto flex flex-col gap-6'>
		
		<NavLink to={MANGA_ROUTE}><LogoIcon/></NavLink>

		<ul className='flex gap-[50px]'>
				<li>
					<NavLink className="text-navbar">Правовласника</NavLink>
				</li>
				<li>
					<NavLink  className="text-navbar" >Як додати комікс</NavLink>
				</li>
		</ul>
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-x-[15px]'>
				<TelegramIcon/>
				<InstagramIcon/>
				<TiktokIcon/>
			</div>
			<div className='flex items-center max-h-8 space-x-[10px]'>
				<span className='text-title-bg relative top-[10px]'>©</span>
				<p className='text-subtitle-sm'>2023 Manga UA</p>
			</div>
		</div>
	</footer>
  )
}

export default Footer