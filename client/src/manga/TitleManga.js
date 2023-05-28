import {makeAutoObservable} from 'mobx'

export default class TitleManga {
	constructor() {
		// Нижній прочерк перед змінною означає, що таку змінну не можна змінювати
		this._titles = [
			{id_title:1, name_title:"One Piece",image_title:"https://static.wikia.nocookie.net/character-power/images/9/9a/One_Piece.jpg/revision/latest/scale-to-width-down/690?cb=20140224115957&path-prefix=ru",description_title: "Це опис нашого тайтлу",date_release_title:"22.02.2022"},
			{id_title: 3, name_title: "Naruto", image_title: "https://static.wikia.nocookie.net/naruto/images/0/0d/NarutoCover1.jpg/revision/latest/scale-to-width-down/282?cb=20110819072931", description_title: "Naruto follows the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers.", date_release_title: "03.10.1999"},
			{id_title: 4, name_title: "Dragon Ball", image_title: "https://static.wikia.nocookie.net/dragonball/images/2/2e/Dragon_Ball_manga_cover_volume_1.jpg/revision/latest/scale-to-width-down/320?cb=20130913020253", description_title: "Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.", date_release_title: "20.11.1984"},
			{id_title: 5, name_title: "Death Note", image_title: "https://static.wikia.nocookie.net/deathnote/images/c/cb/Death_Note_Volume_1.jpg/revision/latest/scale-to-width-down/310?cb=20130909193119", description_title: "Death Note follows the story of Light Yagami, a high school student who discovers a supernatural notebook.", date_release_title: "01.12.2003"},
			{id_title: 6, name_title: "Bleach", image_title: "https://static.wikia.nocookie.net/bleach/images/3/31/Vol._1_Cover.png/revision/latest/scale-to-width-down/318?cb=20111225114453", description_title: "Bleach follows the story of Ichigo Kurosaki, a teenager with the ability to see ghosts.", date_release_title: "20.08.2001"},
			{id_title: 7, name_title: "One Punch Man", image_title: "https://static.wikia.nocookie.net/onepunchman/images/4/40/Volume1.png/revision/latest/scale-to-width-down/310?cb=20161128224838", description_title: "One Punch Man is a superhero webcomic created by the artist One.", date_release_title: "03.06.2009"},
			{id_title: 8, name_title: "My Hero Academia", image_title: "https://static.wikia.nocookie.net/bokunoheroacademia/images/3/34/Volume_1.png/revision/latest/scale-to-width-down/318?cb=20170202032941", description_title: "My Hero Academia follows the story of Izuku Midoriya, a boy born without superpowers.", date_release_title: "07.07.2014"},
			{id_title: 9, name_title: "Fullmetal Alchemist", image_title: "https://static.wikia.nocookie.net/fma/images/1/19/Volume_1.jpg/revision/latest/scale-to-width-down/310?cb=20110524053540", description_title: "Fullmetal Alchemist is a Japanese manga series written and illustrated by Hiromu Arakawa.", date_release_title: "12.07.2001"},
			{id_title: 10, name_title: "Tokyo Ghoul", image_title: "https://static.wikia.nocookie.net/tokyoghoul/images/7/7e/Tokyo_Ghoul_Manga_Volume_1.png/revision/latest/scale-to-width-down/310?cb=20161208185253", description_title: "Tokyo Ghoul is a dark fantasy manga series written and illustrated by Sui Ishida.", date_release_title: "08.09.2011"},
		]
		this._types = [
			{ id_type: 1, name_type: "Action" },
			{ id_type: 2, name_type: "Romance" },
			{ id_type: 3, name_type: "Comedy" },
			{ id_type: 4, name_type: "Fantasy" },
			{ id_type: 5, name_type: "Mystery" },
			{ id_type: 6, name_type: "Adventure" },
			{ id_type: 7, name_type: "Drama" },
			{ id_type: 8, name_type: "Horror" },
			{ id_type: 9, name_type: "Sci-Fi" },
			{ id_type: 10, name_type: "Slice of Life" }
		]
		makeAutoObservable(this)
	}

	setTitles(titles) {
		this._titles = titles
	}

	setTypes(types) {
		this._types = types
	}

	// Компютед ф-ції
	// звертаємось до них, як до об'єктів
	// визиваються коли змінна що використовується змінила свій стан
	get titles() {
		return this._titles
	}
	get types() {
		return this._types
	}
}