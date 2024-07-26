import React from 'react';
import Home from './components/home/Home'
import About from './components/home/About'
import Projects from './components/home/Projects'
import Contact from './components/home/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const HomePage = () => {
	return (
		<>
			<Home/>
			<About/>
			<Projects/>
			<Contact/>	
			
		</>
	)
}
export default HomePage