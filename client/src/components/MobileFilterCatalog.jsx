import React, { useContext, useEffect, useState } from 'react'
import DropDown from './DropDown'
import { ReactComponent as DeltaIcon } from '../images/delta-icon.svg';
import { DARK_THEME, LIGHT_THEME } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


const MobileFilterCatalog = observer(({ isOpen = false, setIsOpen}) => {
	const [selectedGenre, setSelectedGenre] = useState(null);
	const [selectedStatus, setSelectedStatus] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);

	// контекст
	const {theme} = useContext(Context);

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

	// flex-col items-center space-y-4
	// flex flex-col gap-4
	// style={isOpen ? getPositionStyle() : {}}
	// 
	const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];
	const statuses = ['In Progress', 'Completed', 'On Hold', 'Cancelled'];
	const categories = ['Movies', 'TV Shows', 'Books', 'Games'];

	// lock body with scrolling
	isOpen ? document.body.classList.add('lock'):document.body.classList.remove('lock');
	return (
		<React.Fragment>
			<div className={`absolute top-0 left-0 right-0 bg-slate-400 opacity-50 z-10 min-h-[100%] ${isOpen ? 'flex' : 'hidden'}`}></div>
			<div className={`absolute right-0 w-full sm:w-1/2 
					${theme._theme === LIGHT_THEME ? "bg-main-light" : "bg-main-dark"}  
					z-10  min-h-screen 
					${isOpen ? 'flex justify-center' : 'hidden'}`
				}
			>
				<div className='w-[80%] gap-y-6'>
					{/* title and clear button */}
					<div className='flex justify-between items-center'>
						<h4 className='text-subtitle-md'>Фільтри</h4>
						<button 
							className='text-text-bg p-3 hover:border border-[0.5px] hover:border-stroke-dark rounded'
							onClick={handleClear}
						>
							Очистити
						</button>
					</div>
					{/* fields filter */}
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
			</div>
		</React.Fragment>
		
	)
});
  
export default MobileFilterCatalog