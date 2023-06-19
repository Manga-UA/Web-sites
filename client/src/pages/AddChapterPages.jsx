import React, { useContext,useEffect,useState } from 'react'
import { DARK_THEME } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import {useParams} from 'react-router-dom'
import { createChapter } from '../http/titleApi';
// const uuid = require('uuid')
// const path = require('path');

const AddChapterPages = observer(() => {
	const {theme} = useContext(Context);
	// style class in elements
	const styleInpute = 'placeholder:text-inherit h-9 px-1 lg:px-4 bg-transparent text-text-md border border-stroke-dark rounded-sm';

	const {id} = useParams()

    const [nameChapter, setNameChapter] = useState('')
	const [numberChapter, setNumberChapter] = useState(1)
	const [pageFields, setPageFields] = useState([{ pageNumber: '', image: null }]);
	
 	// Получение сохраненных данных из localStorage при загрузке компонента
	useEffect(() => {
		const savedPageFields = localStorage.getItem('pageFields');
		if (savedPageFields) {
			setPageFields(JSON.parse(savedPageFields));
		}
	}, []);

	// Сохранение изменений в localStorage при обновлении pageFields
	useEffect(() => {
		if (pageFields.length > 0) {
			localStorage.setItem('pageFields', JSON.stringify(pageFields));
		  } else {
			localStorage.removeItem('pageFields');
		  }
	}, [pageFields]);

	// Функция для добавления новых полей
	const addPageFields = () => {
		setPageFields([...pageFields, { pageNumber: '', image: null }]);
	};

	// удаление страницы
	const removePageFields = (index) => {
		const updatedPageFields = [...pageFields];
		updatedPageFields.splice(index, 1);
		setPageFields(updatedPageFields);
	};

	// Обновление значения номера страницы
	const updatePageNumber = (index, value) => {
		const updatedPageFields = [...pageFields];
		updatedPageFields[index].pageNumber = value;
		setPageFields(updatedPageFields);
	};

	// Обновление значения изображения
	const updateImage = (index, files) => {
		const updatedPageFields = [...pageFields];
		// let fileName = uuid.v4() + ".jpg"
		// value.mv(path.resolve(__dirname, '../../..', 'server/static', fileName))
		updatedPageFields[index].image = files;
		setPageFields(updatedPageFields);
	};

	// Обработчик отправки формы
	const handleSubmit = (event) => {
		event.preventDefault();
		// Добавьте вашу логику для отправки формы или выполнения других действий
		// ...
	};

	const addChapter = () => {
		const formData = new FormData()
        formData.append('name_chapter', nameChapter)
        formData.append('number_chapter', `${numberChapter}`)
        formData.append('titleDatumIdTitle',`${id}`  )
        formData.append('masPage', JSON.stringify(pageFields))
		console.log(nameChapter);
        console.log(numberChapter);
		console.log(id);
		console.log(pageFields);
		createChapter(formData)
    }

	return (
		<div className='flex flex-col  md:gap-8 lg:gap-10'>
			<h2 className='text-title-md'>Форма додавання коміксів:</h2>
			
			<form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
				{/* name */}
				<input 
					className={styleInpute}
					placeholder='Назва глави'
					type="text"
					id="name_chapter" 
					value={nameChapter}
					onChange={e => setNameChapter(e.target.value)}
				/>
				{/* Number chapter */}
				<input 
					className={styleInpute}
					placeholder='Вкажіть номер глави'
					type="text"
					id="number_chapter" 
					value={numberChapter}
					onChange={e => setNumberChapter(Number(e.target.value))}
				/>
				<button 
				className={`
						self-start text-text-md text-center border hover:border-2 
						${theme._theme === DARK_THEME ? 'bg-dark-theme-btn' : 'bg-xl-elipse-light'} 
						transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]
					`}
				onClick={addPageFields}
				>
					Додати ще поля для сторінки
				</button>
				<div className='flex flex-col gap-3 w-2/4'>
					{pageFields.map((page, index) => (
						<div key={index} className="flex gap-3 items-center">
						<input
							className={styleInpute}
							placeholder="Вкажіть номер сторінки"
							type="text"
							value={page.pageNumber}
							onChange={(e) => updatePageNumber(index, e.target.value)}
						/>
						<input
							className={styleInpute}
							type="file"
							value={page.image}
							onChange={(e) => updateImage(index, e.target.files)}
						/>
						<button
							className="text-red-400"
							onClick={() => removePageFields(index)}
						>
							Видалити поле
						</button>
						</div>
          			))}
				</div>
				
				
				<button 
					className={`w-full text-text-lg text-center border hover:border-2 
					${theme._theme === DARK_THEME ? 'border-xl-elipse-light' : 'border-dark-theme-btn'} 
					transition delay-150 duration-300 ease-in-out rounded py-[10px] px-[15px]`}
					type="submit"
					onClick={addChapter}>
					Додати комікс
				</button>
			</form>
		</div>
	)
})

export default AddChapterPages