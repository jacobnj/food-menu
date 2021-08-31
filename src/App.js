import Navbar from './Navbar';

function App() {	
	
	const title = 'Indian Cuisines';

	return (
		<div className='App'>
			<Navbar />
			<dir className="content">
				<h1>{ title }</h1>
			</dir>
		</div>
	);
}

export default App;