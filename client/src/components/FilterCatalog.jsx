import React, { useContext, useEffect, useState } from 'react'
import DropDown from './DropDown'
import { ReactComponent as DeltaIcon } from '../images/delta-icon.svg';
import { DARK_THEME } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchStatus } from '../http/titleApi';



const FilterCatalog = observer(() => {
	const [selectedGenre, setSelectedGenre] = useState(null);
	const [selectedStatus, setSelectedStatus] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);

	// контекст
	const {theme,titles} = useContext(Context);

	// першочергові написи на випадаючому списку

	const placeholderGenre = 'Оберіть жанр';
	const placeholderStatus = 'Оберіть статус проєкту';
	const placeholderCategory = 'Оберіть категорію';

	const handleGenreSelect = (genre) => {
		setSelectedGenre(genre);
		// додаткова логіка
	};

	const handleStatusSelect = (status) => {
		setSelectedStatus(status);
		// додаткова логіка
	};

	const handleCategorySelect = (category) => {
		setSelectedCategory(category);
		// додаткова логіка
	};
	const handleClear = () => {
		setSelectedGenre(null);
		setSelectedStatus(null);
		setSelectedCategory(null);
	};
	let statuses


	const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];
	statuses = [];
	const categories = ['Movies', 'TV Shows', 'Books', 'Games'];

	let i = 1

	titles.status.map(stat => {
		statuses[i] = stat.name_status
		i++
	});

	
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex justify-between items-center'>
				<h4 className='text-subtitle-md'>Фільтри</h4>
				<button 
					className='text-text-bg p-3 hover:border border-[0.5px] hover:border-stroke-dark rounded'
					onClick={handleClear}
				>
					Очистити
				</button>
			</div>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-3'>
					<h6 className='text-text-bg'>Жанр</h6>
					<DropDown options={genres} onSelect={handleGenreSelect} placeholderText={placeholderGenre} ImageIcon={<DeltaIcon/>}  selectedOption={selectedGenre}/>
				</div>
				<div className='flex flex-col gap-3'>
					<h6 className='text-text-bg'>Статус</h6>
					<DropDown options={statuses} onSelect={handleStatusSelect} placeholderText={placeholderStatus} ImageIcon={<DeltaIcon/>}  selectedOption={selectedStatus}/>
				</div>
				<div className='flex flex-col gap-3'>
					<h6 className='text-text-bg'>Категорія</h6>
					<DropDown options={categories} onSelect={handleCategorySelect} placeholderText={placeholderCategory} ImageIcon={<DeltaIcon/>}  selectedOption={selectedCategory}/>
				</div>
				<button
					className={`text-text-lg ${theme._theme === DARK_THEME ? "bg-button hover:bg-inherit" : "bg-orange-400 hover:bg-inherit"} rounded py-[10px] px-[15px] border border-solid border-stroke-dark`}
				>
					Застосувати
				</button>
			</div>
		</div>
	)
});
  
export default FilterCatalog