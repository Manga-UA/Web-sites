import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import "./index.css"
import Header from './components/Header';
import Wrapper from './components/wrapper';
const App = () => {
  return (
	<BrowserRouter>
		<Wrapper>
			<Header/>
			<AppRouter />
		</Wrapper>
	</BrowserRouter>
  )
}

export default App