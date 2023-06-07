import React from 'react'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import Registration from '../components/Registration'
import Login from '../components/Login'


const Auth = () => {
	const location = useLocation();
	console.log(location.pathname);
	const isLogin = location.pathname === LOGIN_ROUTE;
	
  return (
	<div>
		{isLogin ?
			<Login/>
		:
			<Registration/>
		}
	</div>
  )
}

export default Auth;