import React, { useContext, useEffect, useState } from 'react'

// import Swiper styles
import 'swiper/css';
import 'swiper/swiper.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import "./index.css"
import Header from './components/Header';
import Wrapper from './components/wrapper';
import Footer from './components/Footer';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userApi';
const App = observer( () => {
	const {user} = useContext(Context)
	const [loading, setLoading] = useState( true)
	
	useEffect(()=>{
		check().then(data =>{
			user.setUser(true)
			user.setIsAuth(true)
		})
	},[])

	/*if (loading){
		return 
	}*/

	return (
	<BrowserRouter>
		<Wrapper>
			<Header/>
			<AppRouter />
			<Footer/>
		</Wrapper>
	</BrowserRouter>
  )
})

export default App