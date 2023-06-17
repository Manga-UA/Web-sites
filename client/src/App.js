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
import { Context } from './index';
import { check } from './http/userApi';
import { fetchStatus, fetchTitles } from './http/titleApi';
const App = observer( () => {
  const {user, titles} = useContext(Context);//отримання користувача
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
	fetchTitles().then(data => titles.setTitles(data.rows))	
    check().then(data =>{
      user.setUser(data)
      user.setIsAuth(true)
    }).finally(()=> setLoading(false));
  },[])

  if(loading){
	let circleCommonClasses = 'h-10 w-10 bg-current rounded-full';

	return (
		<div className='flex gap-1 h-screen w-screen m-auto justify-center items-center'>
			<div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
			<div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
			<div className={`${circleCommonClasses} mr-1 animate-bounce400`}></div>
      </div>
	);
 }


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