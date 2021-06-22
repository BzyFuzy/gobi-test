import NavigationBar from './components/navbar';
import Special from './components/special';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<div className="header">
				<div className="top row center">
					<ul className="menu row center">
						<li>WOMEN</li>
						<li>MEN</li>
						<li>HOME</li>
						<li>ACCESSORIES</li>
						<li style={{ marginRight: 0 }}>ORGANIC</li>
					</ul>
					<div className="logo">
						<img alt="logo" src="/img/logo.svg" height="42px" />
					</div>
					<div className="row center" style={{ flex: 2, display: 'flex', justifyContent: 'flex-end' }}>
						<i className="searchicon" />
						<div className="row center">
							<input className="search" placeholder="Search" />
							<i className="cancel" />
						</div>
						<i className="iconw heart" />
						<i className="iconw bag" />
					</div>
				</div>
				<Special />
			</div>
		</div>
	);
}

export default App;
