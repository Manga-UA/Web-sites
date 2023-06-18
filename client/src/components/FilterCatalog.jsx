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
	const {theme,titles,genresTitle} = useContext(Context);

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
		titles._selectstatus=null
		titles._selectganre=null
		titles._selecttype=null
		refresh()
	};

	const gettipe = ()=>{
		for (let i = 1; i < statuses.length; i++) {
			if (statuses[i]==selectedStatus) {
				titles._selectstatus = i
			}			
		}
		for (let i = 1; i < genres.length; i++) {
			if (genres[i]==selectedGenre) {
				titles._selectganre = i
			}			
		}
		for (let i = 1; i < type.length; i++) {
			if (type[i]==selectedCategory) {
				titles._selecttype = i
			}			
		}
		refresh()
	}
	const [value,setValue] = useState();
	  const refresh = ()=>{
      // это вызовет ререндеринг компонента
     setValue({});
  }

	let genres = [];
	let statuses = [];
	let type = [];


	//const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];
	const categories = ['Movies', 'TV Shows', 'Books', 'Games'];///типи

	let i = 1

	titles.genre.map(e => {
		genres[i] = e.name_genre
		i++
	});
	i =1 
	titles.status.map(e => {
		statuses[i] = e.name_status
		i++
	});
	i =1 
	titles.types.map(e => {
		type[i] = e.name_type
		i++
	});
	i =1 
	// Получаем тайтлы
	const titlesArray = titles.titles;
	
	// получаем значения татйлов ключей связаных с жанрами
	const fetchGenreInTitle = () => {
	  const titleGenres = titlesArray.map((title) => {
		const keyTitleGenres = genresTitle.genresTitle.filter(
		  (keyTitleGenre) => keyTitleGenre.titleDatumIdTitle === title.id_title
		);
		const genres = keyTitleGenres.map((keyTitleGenre) => {
		  const genreTitle = titles.genre.find(
			(genreTitle) => genreTitle.id_genre === keyTitleGenre.genreTitleIdGenre
		  );
		  return {
			id_genre: genreTitle.id_genre,
			name_genre: genreTitle.name_genre
		  };
		});
		return {
		  id_title: title.id_title,
		  name_title: title.name_title,
		  genres: genres
		};
	  });
	  return titleGenres;
	};
  
	const titleGenres = fetchGenreInTitle()

	

	console.log(selectedGenre);

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
					<DropDown options={type} onSelect={handleCategorySelect} placeholderText={placeholderCategory} ImageIcon={<DeltaIcon/>}  selectedOption={selectedCategory}/>
				</div>
				<button
					className={`text-text-lg ${theme._theme === DARK_THEME ? "bg-button hover:bg-inherit" : "bg-orange-400 hover:bg-inherit"} rounded py-[10px] px-[15px] border border-solid border-stroke-dark`}
					onClick={gettipe}>
					Застосувати
				</button>
			</div>
		</div>
	)
});
  
export default FilterCatalog