import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import ExternalProjects from './components/ExternalProjects';
import Hero from './components/Hero';

import planet_l from './assets/planet_l.svg';
import planet_r from './assets/planet_r.svg';
import texture from './assets/texture.png';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			{/* TEXTURE */}
			<div
				className="h-screen w-screen fixed top-0 left-0 opacity-10 pointer-events-none"
				style={{
					backgroundImage: `url(${texture})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			></div>
			<Header />
			<main>
				{/* PLANETS */}
				<img
					src={planet_l}
					className="absolute left-0 pointer-events-none -z-10"
				/>
				<img
					src={planet_r}
					className="absolute right-0 pointer-events-none -z-10"
				/>

				<Hero />
				<About />
				<Education />
				<Experience />
				<ExternalProjects />
			</main>
			<Footer />
		</div>
	);
}

export default App;
