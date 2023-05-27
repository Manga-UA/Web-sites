import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserManga from './manga/UserManga';
export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Context.Provider value={{
			user: new UserManga()
		}}>
			<App />
		</Context.Provider>
	</React.StrictMode>
);

