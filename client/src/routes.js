import AddChapterPages from "./pages/AddChapterPages"
import AddTitlePages from "./pages/AddTitlePages"
import ArtistPages from "./pages/ArtistPages"
import Auth from "./pages/Auth"
import AuthorPages from "./pages/AuthorPages"
import CatalogPages from "./pages/CatalogPages"
import EditTitlePages from "./pages/EditTitlePages"
import Manga from "./pages/Manga"
import Profile from "./pages/Profile"
import TeamsPages from "./pages/TeamsPages"
import TitleChapterPages from "./pages/TitleChapterPages"
import TitlePages from "./pages/TitlePages"
import TranlatorPages from "./pages/TranlatorPages"
import UserBookmarkPages from "./pages/UserBookmarkPages"
import UserSettingsPages from "./pages/UserSettingsPages"
import {ADD_CHAPTER_ROUTE, ADD_TITLE_ROUTE, ARTISTS_ROUTE, AUTHOR_ROUTE, BOOKMARK_ROUTE, CATALOG_ROUTE, CHAPTER_ROUTE, EDIT_TITLE_ROUTE, LOGIN_ROUTE, MANGA_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SETTINGS_ROUTE, TEAMS_ROUTE, TITLE_ROUTE, TRANSLATOR_ROUTE } from "./utils/consts"

// Описує  усі маршрути(роути) нашого додатку
export const authRoutes = [
	{
		path: PROFILE_ROUTE,
		Component: Profile
	},
	{
		path: BOOKMARK_ROUTE,
		Component: UserBookmarkPages
	},
	{
		path: SETTINGS_ROUTE,
		Component: UserSettingsPages
	},
	{
		path: TEAMS_ROUTE,
		Component: TeamsPages
	},
	{
		path: ADD_TITLE_ROUTE,
		Component: AddTitlePages
	},
	{
		path: ADD_CHAPTER_ROUTE,
		Component: AddChapterPages
	},
	{
		path: EDIT_TITLE_ROUTE + '/:id',
		Component: EditTitlePages
	}
]

export const publicRoutes = [
	{
		path: MANGA_ROUTE,
		Component: Manga
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth
	},
	{
		path: CATALOG_ROUTE,
		Component: CatalogPages
	},
	{
		path: TITLE_ROUTE + '/:id',
		Component: TitlePages
	},
	{
		path: CHAPTER_ROUTE + '/:id',
		Component: TitleChapterPages
	},
	{
		path: TRANSLATOR_ROUTE + '/:id',
		Component: TranlatorPages
	},
	{
		path: ARTISTS_ROUTE + '/:id',
		Component: ArtistPages
	},
	{
		path: AUTHOR_ROUTE + '/:id',
		Component: AuthorPages
	},
]