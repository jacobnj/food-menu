import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

function App() {	

	return (
		<div className='App'>
			<Navbar />
			<dir className="content">
				<Home />				
			</dir>
		</div>
	);
}

export default App;