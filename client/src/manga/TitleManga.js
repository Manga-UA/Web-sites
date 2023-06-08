import {makeAutoObservable} from 'mobx'

export default class TitleManga {
	constructor() {
		// Нижній прочерк перед змінною означає, що таку змінну не можна змінювати
		this._titles = [
			{id_title:1,recomend_title:true, name_title:"One Piece",image_title:"https://img.asmedia.epimg.net/resizer/faB5sP-drEItAc3xE8po4Fagsqo=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/U6LVWIVDSRE6HIB5GQQQ3LSAPE.jpg",description_title: "Це опис нашого тайтлу",date_release_title:"22.02.2022"},
			{id_title:2,recomend_title:false, name_title:"Xanter X Xanter",image_title:"https://img1.ak.crunchyroll.com/i/spire3/45f675001c07ebf704eeae0bc993b3e91633933975_main.png",description_title: "Це опис нашого тайтлу",date_release_title:"22.02.2022"},
			{id_title: 3, recomend_title:false, name_title: "Naruto", image_title: "https://klike.net/uploads/posts/2018-09/1536741268_1.jpg", description_title: "Naruto follows the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers.", date_release_title: "03.10.1999"},
			{id_title: 4, recomend_title:true, name_title: "Dragon Ball Dragon Ball Dragon Ball", image_title: "https://static.bandainamcoent.eu/high/dragon-ball/dragonball-project-z/00-page-setup/dbzk_game-thumbnail.jpg", description_title: "Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama.", date_release_title: "20.11.1984"},
			{id_title: 5, recomend_title:false, name_title: "Death Note", image_title: "https://upload.wikimedia.org/wikipedia/uk/f/fb/DeathNote_Anime.jpg", description_title: "Death Note follows the story of Light Yagami, a high school student who discovers a supernatural notebook.", date_release_title: "01.12.2003"},
			{id_title: 6, recomend_title:false, name_title: "Bleach", image_title: "https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png", description_title: "Bleach follows the story of Ichigo Kurosaki, a teenager with the ability to see ghosts.", date_release_title: "20.08.2001"},
			{id_title: 7, recomend_title:false, name_title: "One Punch Man", image_title: "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg", description_title: "One Punch Man is a superhero webcomic created by the artist One.", date_release_title: "03.06.2009"},
			{id_title: 8, recomend_title:false, name_title: "My Hero Academia", image_title: "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_FMjpg_UX1000_.jpg", description_title: "My Hero Academia follows the story of Izuku Midoriya, a boy born without superpowers.", date_release_title: "07.07.2014"},
			{id_title: 9, recomend_title:true, name_title: "Fullmetal Alchemist", image_title: "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg", description_title: "Fullmetal Alchemist is a Japanese manga series written and illustrated by Hiromu Arakawa.", date_release_title: "12.07.2001"},
			{id_title: 10, recomend_title:false, name_title: "Tokyo Ghoul", image_title: "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/tokyo-ghoul-ken-kaneki-i28409.jpg", description_title: "Tokyo Ghoul is a dark fantasy manga series written and illustrated by Sui Ishida.", date_release_title: "08.09.2011"},
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
		this._status = [
			{ id_status: 1, name_status: "Перекладається" },
			{ id_status: 2, name_status: "Призупинено" },
			{ id_status: 3, name_status: "Перекладено" },
			{ id_status: 4, name_status: "Ангоїнг" },
		]
		makeAutoObservable(this)
	}

	setTitles(titles) {
		this._titles = titles
	}

	setTypes(types) {
		this._types = types
	}
	setStatus(status) {
		this._status = status
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
	get status() {
		return this._status
	}
}