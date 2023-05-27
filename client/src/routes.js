import ArtistPages from "./pages/ArtistPages"
import Auth from "./pages/Auth"
import AuthorPages from "./pages/AuthorPages"
import CatalogPages from "./pages/CatalogPages"
import Manga from "./pages/Manga"
import Profile from "./pages/Profile"
import TeamsPages from "./pages/TeamsPages"
import TitleChapterPages from "./pages/TitleChapterPages"
import TitlePages from "./pages/TitlePages"
import TranlatorPages from "./pages/TranlatorPages"
import UserBookmarkPages from "./pages/UserBookmarkPages"
import UserSettingsPages from "./pages/UserSettingsPages"
import {ARTISTS_ROUTE, AUTHOR_ROUTE, BOOKMARK_ROUTE, CATALOG_ROUTE, CHAPTER_ROUTE, LOGIN_ROUTE, MANGA_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SETTINGS_ROUTE, TEAMS_ROUTE, TITLE_ROUTE, TRANSLATOR_ROUTE } from "./utils/consts"

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