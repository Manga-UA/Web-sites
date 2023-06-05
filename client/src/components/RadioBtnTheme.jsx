import React, { useContext } from 'react'
import { ReactComponent as SunIcon } from '../images/sun-icon.svg'
import { ReactComponent as MoonIcon } from '../images/moon-icon.svg'
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { DARK_THEME, LIGHT_THEME } from '../utils/consts';
const RadioBtnTheme = observer(() => {
	// контекст теми  
	const {theme} = useContext(Context);
	// Обробник події теми
	const handleThemeChange = (event) => {
		theme.setTheme(event.target.value);
	}
  return (
	
	<React.Fragment>
		{
			theme._theme === LIGHT_THEME 
			?
			<div className='py-[10px] px-[15px] rounded-[35px] flex items-center space-x-2.5 bg-white border border-solid border-2 border-stroke-light-theme transition-all delay-100 duration-500 ease-in-out'>
				<SunIcon/>
				<input className='h-8 w-8 bg-xl-elipse-light' type="radio" id="radio" value={LIGHT_THEME} onChange={handleThemeChange} name="color-theme" />
				<label htmlFor="radio">
				</label>
			</div>
			:
			<div className='py-[10px] px-[15px] rounded-[35px] flex items-center space-x-2.5 bg-dark-theme-btn border border-solid border-2 border-stroke-dark-theme transition-all delay-100 duration-500 ease-in-out'>
				<input className='h-8 w-8' type="radio"id="radio2"  value={DARK_THEME} onChange={handleThemeChange}  name="color-theme" />
				<label htmlFor="radio2">
				</label>
				<MoonIcon/>
			</div> 
		}
		
				
	</React.Fragment>
  )
})

export default RadioBtnTheme