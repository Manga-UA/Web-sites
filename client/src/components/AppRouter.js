// Описує логіку навігації по сторінкам
// На якісь входить тільки авторизований користувач, а на якісь звичайний
import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes,publicRoutes} from "../routes";
import { MANGA_ROUTE } from '../utils/consts';
import { Context } from '../index';
const AppRouter = () => {
	const {user} = useContext(Context);
	const {title} = useContext(Context);
	// console.log(title.titles[0].id_title);
	return (
		// Працює таким чином, що вказавши йому декілька маршрутів
		// якщо не один з них не відпрацює або буде вказаний не коректно,
		// відпрацює останній світч (тобто відпрацює групування)
		
		<Routes>
			{user.isAuth && authRoutes.map(({path,Component})=>
				// exact - інформує про те що шлях має співпадати
				<Route key={path} path={path} element={<Component/>} exact/>
			)}
			{publicRoutes.map(({path,Component})=>
				// exact - інформує про те що шлях має співпадати
				<Route key={path} path={path} element={<Component/>} exact/>
			)}
			 <Route path='*' element={<Navigate to={MANGA_ROUTE}/>} />
		</Routes>
	)
}
 
export default AppRouter;