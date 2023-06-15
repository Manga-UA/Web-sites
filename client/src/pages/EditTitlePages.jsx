import React, { useContext, useState } from 'react'
import { DARK_THEME } from '../utils/consts';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import DropDown from '../components/DropDown';
import { ReactComponent as DeltaIcon } from '../images/delta-icon.svg';


const EditTitlePages = () => {
	const {theme} = useContext(Context);
	// style class in elements
	const styleLabel = 'flex flex-col gap-2 text-text-bg';
	const styleInpute = 'placeholder:text-inherit h-9 px-1 lg:px-4 bg-transparent text-text-md border border-stroke-dark rounded-sm';

	const [selectedStatus, setSelectedStatus] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);
	
	const placeholderStatus = 'Оберіть статус проєкту';
	const placeholderCategory = 'Оберіть категорію';

	const handleStatusSelect = (status) => {
		setSelectedStatus(status);
		// додаткова логіка
	};

	const handleCategorySelect = (category) => {
		setSelectedCategory(category);
		// додаткова логіка
	};

	const statuses = ['In Progress', 'Completed', 'On Hold', 'Cancelled'];
	const categories = ['Movies', 'TV Shows', 'Books', 'Games'];


	return (
		<div className='flex flex-col  md:gap-8 lg:gap-10'>
			<h2 className='text-title-md'>Форма редагування коміксу:</h2>
			<form className='flex flex-col gap-4 w-full'>
				{/* name */}
				<input 
					className={styleInpute}
					placeholder='Назва тайтлу'
					type="text"
					id="name_title" 
				/>
				{/* image */}
				<label className={styleLabel}>
					Додайте обкладинку тайтлу
					<input className={styleInpute} type="file" id="image_title" />
				</label>
				{/* Description title */}
				<textarea className='placeholder:text-inherit max-h-72 px-1 lg:px-4 py-2 bg-transparent text-text-md border border-stroke-dark rounded-sm'
					placeholder='Вкажіть опис тайтлу' 
					cols="30" 
					rows="10" 
					id='description_title'
				 >

				 </textarea>
				{/* Date */}
				<label className={styleLabel}>
					Вкажіть дату створення тайтлу
					<input className={ styleInpute} type="date" id="date_release_title" />
				</label>
				<div className='flex flex-col gap-2'>
					<h6 className='text-text-bg'>Статус</h6>
					<DropDown options={statuses} onSelect={handleStatusSelect} placeholderText={placeholderStatus} ImageIcon={<DeltaIcon/>}  selectedOption={selectedStatus}/>
				</div>
				<div className='flex flex-col gap-2'>
					<h6 className='text-text-bg'>Категорія</h6>
					<DropDown options={categories} onSelect={handleCategorySelect} placeholderText={placeholderCategory} ImageIcon={<DeltaIcon/>}  selectedOption={selectedCategory}/>
				</div>
				{/* Author */}
				<input 
					className={styleInpute}
					placeholder='Вкажіть автора'
					type="text"
					id="name_screenwriter" 
				/>
				{/* Artist */}
				<input 
					className={styleInpute}
					placeholder='Вкажіть художника'
					type="text"
					id="name_artist" 
				/>
				<button 
					className={`w-full text-text-lg text-center border hover:border-2 
					${theme._theme === DARK_THEME ? 'border-xl-elipse-light' : 'border-dark-theme-btn'} 
					transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
				 type="submit">
					Оновити комікс
				</button>
			</form>
		</div>
	)
}

export default EditTitlePages