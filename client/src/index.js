import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserManga from './manga/UserManga';
import ThemeManga from './manga/ThemeManga';
export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Context.Provider value={{
			user: new UserManga(),
			theme: new ThemeManga()
		}}>
			<App />
		</Context.Provider>
	</React.StrictMode>
);

