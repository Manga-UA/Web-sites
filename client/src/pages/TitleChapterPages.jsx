import React, { useContext, useEffect, useState } from 'react'
import DropDown from '../components/DropDown'
import { Context } from '../index';
import { ReactComponent as DeltaIcon } from '../images/delta-icon.svg';
import { observer } from 'mobx-react-lite';
import { ReactComponent as BookMarkIcon } from '../images/bookmark-bg-icon.svg';
import girlTEST from '../images/pages.jpg'
import { fetchOneChapter } from '../http/titleApi';
const TitleChapterPages = observer(() => {
	const [selectedChapter, setSelectedChapter] = useState(null);

	// контекст
	const {titles} = useContext(Context);

	// першочергові написи на випадаючому списку
	// тут потрібно змінити значення на номер глави
	const placeholderChapter = 'Глава';

	// стилі для випадаючого списку
	const styleBorderDropDown = 'border-0 gap-2';

	const handleChapterSelect = (chapter) => {
		setSelectedChapter(chapter);
		// додаткова логіка
	};
	
	const chapters = ['1 - філософія страдань', '1-2', '1-3', '1-4'];
	const titleName = titles._titles.map((title)=> title.name_title);


	useEffect(()=>{
		fetchOneChapter(1).then(data => titles.setChapters(data))
	})

	console.log();


	return (
		<div className='flex flex-col gap-4'>
			<div className='flex justify-between items-center border border-stroke-dark py-1 px-3 rounded'>
				<p className='text-text-bg'>{titleName[0]}</p>
				<DropDown className="w-7" options={chapters} onSelect={handleChapterSelect} placeholderText={placeholderChapter} ImageIcon={<DeltaIcon/>}  selectedOption={selectedChapter} borderStyle={styleBorderDropDown}/>
				<span className="flex items-center gap-3 text-text-lg"
					// тут буде можливість додавання тайтлу в закладки
					// onClick={}
				>
					<BookMarkIcon />
				</span>
			</div>
			{/* Зображення глави */}
			<div className=''>
				<img className='' src={girlTEST} alt="" />
			</div>
		</div>
	)
})

export default TitleChapterPages;