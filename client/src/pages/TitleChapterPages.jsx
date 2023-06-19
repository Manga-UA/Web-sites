import React, { useContext, useEffect, useState } from 'react'
import DropDown from '../components/DropDown'
import { Context } from '../index';
import { ReactComponent as DeltaIcon } from '../images/delta-icon.svg';
import { observer } from 'mobx-react-lite';
import { ReactComponent as BookMarkIcon } from '../images/bookmark-bg-icon.svg';
import girlTEST from '../images/pages.jpg'
import { fetchChapter, fetchOneChapter,fetchPages } from '../http/titleApi';
import { useNavigate, useParams } from 'react-router-dom';
import { CHAPTER_ROUTE } from '../utils/consts';
const TitleChapterPages = observer(() => {
	const [selectedChapter, setSelectedChapter] = useState(null);

	// контекст
	const {titles} = useContext(Context);

	// першочергові написи на випадаючому списку
	

	// стилі для випадаючого списку
	const styleBorderDropDown = 'border-0 gap-2';

	const handleChapterSelect = (chapter) => {
		
		// else {
		// 	setSelectedChapter(chapter);
		// }
		console.log(selectedChapter);
		console.log("selectedChapter  dfsdfgf");
		console.log(selectedChapter);
		setSelectedChapter(chapter)
		// додаткова логіка
	};
	
	const [chapter, setChapter] = useState({})
	const [chapters, setChapters] = useState({})
	
	// Усі тайтли
	const titlesArray = titles.titles;
	
	// навігація
	const navigate = useNavigate();
	// const titleName = titlesArray.find((title) => title.id_title === chapter.titleDatumIdTitle);
	
	// назва тайтла
	const titleName = titlesArray.find((title) => title.id_title === chapter.titleDatumIdTitle)?.name_title || "Ім'я тайтлу";
	console.log(titles._chapter);

	const {id} = useParams()
	const titleDatumIdTitle = id
	console.log(titleDatumIdTitle)
	
	// масив глав
	const chaptersArray = titles.chapters.filter((chapterTitle)=> chapterTitle.titleDatumIdTitle === chapter.titleDatumIdTitle);

	// масив сторінок
	const pagesArray = titles.pages.filter((page)=>chapter.id_chapter === page.chapterDatumIdChapter)

	// надпис над випадаючим списком
	const placeholderChapter = chapter.name_chapter;


	const array = chaptersArray.map((chapterArr)=>chapterArr.name_chapter)

	const [value,setValue] = useState();
	const refresh = ()=>{
	// это вызовет ререндеринг компонента
   setValue({});
}

	useEffect(()=>{
		
		
		fetchOneChapter(id).then(data => setChapter(data))
		fetchChapter(chapter.titleDatumIdTitle).then(data => titles.setChapters(data.rows))
		fetchPages(id).then(data => titles.setPages(data.rows))
		// navigate(CHAPTER_ROUTE + "/" + chapter.id_chapter);3
		if (selectedChapter != undefined){
			chaptersArray.map((chaptersArr) => {
				console.log(chaptersArr.id_chapter);
				if (chaptersArr.name_chapter == selectedChapter) {
					
					console.log("fffffffffffffffffffffffffffffffffffffff");
					navigate(CHAPTER_ROUTE + "/" + chaptersArr.id_chapter)
					
				}})
		}
	},[selectedChapter])

	console.log("selectedChapter");
	console.log(selectedChapter);
	

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex justify-between items-center border border-stroke-dark py-1 px-3 rounded'>
				<p className='text-text-bg'>{titleName}</p>
				<DropDown className="w-7" options={array} onSelect={handleChapterSelect} placeholderText={placeholderChapter} ImageIcon={<DeltaIcon/>}  selectedOption={selectedChapter} borderStyle={styleBorderDropDown}/>
				<span className="flex items-center gap-3 text-text-lg"
					// тут буде можливість додавання тайтлу в закладки
					// onClick={}
				>
					<BookMarkIcon />
				</span>
			</div>
			{/* Зображення глави */}
			<div className='flex justify-center'>
				{/* <img className='' src={girlTEST} alt="" /> */}
				{pagesArray.map((page)=> (
					<img src={ process.env.REACT_APP_API_URL + page.image_page} alt="" />
					// <img src={page.image_page} alt="" />
				))}
			</div>
		</div>
	)
})
export default TitleChapterPages;