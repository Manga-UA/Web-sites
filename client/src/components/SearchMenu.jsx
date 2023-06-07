import React, { useContext, useState } from 'react'
import { Context } from '../index';
import { LIGHT_THEME } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const SearchMenu = observer(() => {
	// контекст теми  
	const {theme} = useContext(Context);
	const {title} = useContext(Context);
	// стан пошуку
	const [serchTerm, setSearchTerm] = useState('');
	// Обробник події пошуку
	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	}
	// console.log(title._title);
	return (
		<React.Fragment>
			<input 
				className={`px-1 bg-inherit ${theme._theme === LIGHT_THEME ? 'placeholder:text-inherit' : 'placeholder:text-font'} placeholder:text-end border border-solid border-stroke-dark rounded-[5px]`} 
				type="search" 
				name="titleSerch" 
				value={serchTerm} 
				onChange={handleSearchChange} 
				placeholder='Пошук'
			/>

		</React.Fragment>
	)
})

export default SearchMenu