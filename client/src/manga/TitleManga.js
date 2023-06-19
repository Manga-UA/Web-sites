import {makeAutoObservable} from 'mobx'

export default class TitleManga {
	constructor() {
		// Нижній прочерк перед змінною означає, що таку змінну не можна змінювати
		this._titles = []
		this._types = []
		this._status = []
		this._genre = []
		this._genreTitle = []
		this._artistTitle = []
		this._chapters = []
		this._selectstatus = null
		this._selectganre=null
		this._selecttype=null
		makeAutoObservable(this)
	}

	setTitles(titles) {
		this._titles = titles
	}

	setTitlesGenres(titlesGenre) {
		this._titlesGenre = titlesGenre
	}

	setArtistTitle(titleArtist){
		this._artistTitle = titleArtist
	}

	setTypes(types) {
		this._types = types
	}
	setStatus(status) {
		this._status = status
	}

	setGenre(genre) {
		this._genre = genre
	}

	setGenreTitle(genreTitle){
		this._genreTitle = genreTitle
	}

	setChapters(chapter) {
		this._chapters = chapter
	}

	setSelectedTitles(titles) {
		this._selectedTitles = titles
	}

	setSelectedTypes(types) {
		this._selectedTypes = types
	}
	setSelectedStatus(status) {
		this._selectedStatus = status
	}

	setSelectedChapters(chapter) {
		this._selectedChapters = chapter
	}
	// Компютед ф-ції
	// звертаємось до них, як до об'єктів
	// визиваються коли змінна що використовується змінила свій стан
	get titles() {
		return this._titles
	}
	get titlesGenre() {
		return this._titlesGenre
	}
	get types() {
		return this._types
	}
	get genre() {
		return this._genre
	}

	get genresTitle() {
		return this._genreTitle
	}
	get artistTitle(){
		return this._artistTitle
	}

	get status() {
		return this._status
	}
	get chapters() {
		return this._chapters
	}


	get selectGanre() {
		return this._selectganre
	}

	get selectStatus() {
		return this._selectstatus
	}
	get selectType() {
		return this._selecttype
	}
}