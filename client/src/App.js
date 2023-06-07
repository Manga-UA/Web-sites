import React from 'react'

// import Swiper styles
import 'swiper/css';
import 'swiper/swiper.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import "./index.css"
import Header from './components/Header';
import Wrapper from './components/wrapper';
import Footer from './components/Footer';
const App = () => {
  return (
	<BrowserRouter>
		<Wrapper>
			<Header/>
			<AppRouter />
			<Footer/>
		</Wrapper>
	</BrowserRouter>
  )
}

export default App