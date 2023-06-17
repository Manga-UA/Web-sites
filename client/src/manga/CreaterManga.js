import {makeAutoObservable} from 'mobx'

export default class CreaterManga {
	constructor() {
		// Нижній прочерк перед змінною означає, що таку змінну не можна змінювати
		// художник
		this._artists = [
			{id_artist:1,name_artist:"Хірому Аракава",},
		]
		// сценарист/автор
		this._screenWriters = [
			{ id_screenwriter: 1, name_screenwriter: "Тацукі Фуджімото" },
		]
		// перекладач
		this._translates = [
			{ id_translate: 1, name_translate: "PirateKing", description_translate: "Опис", data_registri: "22.02.2022"},
		]
		makeAutoObservable(this)
	}

	setArtist(artist) {
		this._artist = artist
	}

	setTypes(screenWriter) {
		this._screenWriter = screenWriter
	}
	setTranslate(translate) {
		this._translate = translate
	}

	// Компютед ф-ції
	// звертаємось до них, як до об'єктів
	// визиваються коли змінна що використовується змінила свій стан
	get artist() {
		return this._artist
	}
	get screenWriter() {
		return this._screenWriter
	}
	get translate() {
		return this._translate
	}
}