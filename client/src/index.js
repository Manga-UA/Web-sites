import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserManga from './manga/UserManga';
import TittleManga from './manga/TitleManga';
import './dist/output.css'
export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Context.Provider value={{
			user: new UserManga(),
			title: new TittleManga(),
		}}>
			<App />
		</Context.Provider>
	</React.StrictMode>
);
