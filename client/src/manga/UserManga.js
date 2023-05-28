import {makeAutoObservable} from 'mobx'

export default class UserManga {
	constructor() {
		// Нижній прочерк перед змінною означає, що таку змінну не можна змінювати
		this._isAuth = false
		this._user = false
		makeAutoObservable(this)
	}

	setIsAuth(bool) {
		this._isAuth = bool
	}

	setUser(user) {
		this._user = user
	}

	// Компютед ф-ції
	// звертаємось до них, як до об'єктів
	// визиваються коли змінна що використовується змінила свій стан
	get isAuth() {
		return this._isAuth
	}
	get user() {
		return this._user
	}
}