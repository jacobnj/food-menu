import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import Home from './Home';
import Foodlist from './Foodlist';
import data from './data/data.json';

function App() {	

	return (
		<Router>
			<div className="container">
			<div className='app-grid'>
				<div className="navbar-grid">
					<div>
						<h1>The Indian Eatery</h1>
					</div>
					<div>
						<Navbar />
					</div>
				</div>
				<div className="content-grid">
					<div>
						<Navbar2 />
					</div>
					<div>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/contact">
								<Contact />
							</Route>
							<Route exact path="/maincourse">
								<Foodlist data={data.main}/>
							</Route>
							<Route exact path="/starters">
								<Foodlist data={data.sweets}/>
							</Route>
							<Route exact path="/deserts">
								<Foodlist data={data.deserts}/>
							</Route>						
						</Switch>
					</div>
				</div>
			</div>
			</div>
		</Router>
	);
}

export default App;