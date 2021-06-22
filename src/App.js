import NavigationBar from './components/navbar';

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
					<div className="row center" style={{ flex: 2, display: "flex", justifyContent:"flex-end" }}>
						<i className="icon search" />
						<input className="search" placeholder="Search" />
						<i className="icon heart" />
						<i className="icon bag" />
					</div>
          
				</div>
        <div style={{display: "flex", flex:1}}>
          <div style={{flex: 1}}></div>
          <div className="special" >
          <p className="summer">SUMMER </p>
          <p className="sale">Sale</p>
          <div className="off row center" >
            <p className="upto">upto</p>
            <p className="stp">60%</p>
            <p className="ff">ff</p>
          </div>
          <button>shop now</button>
          </div>
        </div>
			</div>

      
		</div>
	);
}

export default App;
