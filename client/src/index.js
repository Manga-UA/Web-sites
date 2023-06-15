import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserManga from './manga/UserManga';
import ThemeManga from './manga/ThemeManga';
import TitleManga from './manga/TitleManga';
import CreaterManga from './manga/CreaterManga';

export const Context = createContext(null);


const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserManga(),
        theme: new ThemeManga(),
        titles: new TitleManga(),
		chapters: new TitleManga(),
		status: new TitleManga(),
		artists: new CreaterManga(),
		screenWriters: new CreaterManga(),
		translates: new CreaterManga(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
