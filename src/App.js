import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data/data.json';
import Foodlist from './Foodlist';

function App() {	

	return (
		<Router>
			<div className='App'>
				<Navbar />
				<dir className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/maincourse">
							<Foodlist data={data.main}/>
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
					</Switch>
				</dir>
			</div>
		</Router>
	);
}

export default App;