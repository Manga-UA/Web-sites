import { makeAutoObservable } from 'mobx';
import { DARK_THEME, LIGHT_THEME } from '../utils/consts';

export default class ThemeManga {
	constructor() {
		this._theme = this.loadThemeFromStorage() || LIGHT_THEME;
		document.body.classList.add(this._theme);
		makeAutoObservable(this);
	}

	setTheme = (theme) => {
		this._theme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
		this.saveThemeToStorage(this._theme);
		console.log(theme);
		document.body.classList.remove(LIGHT_THEME, DARK_THEME);
		document.body.classList.add(this._theme);
	};

	getTheme = () => {
		return this._theme;
	};

	saveThemeToStorage = (theme) => {
		localStorage.setItem('theme', theme);
	};

	loadThemeFromStorage = () => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === LIGHT_THEME || savedTheme === DARK_THEME) {
			return savedTheme;
		}
		return null;
	};
}
