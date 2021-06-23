import { Footer } from './components/footer';
import { Header } from './components/header';
import { Menu } from './components/menu';
import NavigationBar from './components/navbar';
import { SubHeader } from './components/subheader';

function App() {
	const womenItems = [
		{ image: '/img/menu.png', path: '#menu', title: 'CARDIGANS' },
		{ image: '/img/menu1.png', path: '#menu', title: 'DRESSES' },
		{ image: '/img/menu.png', path: '#menu', title: 'CARDIGANS' }
	];
	const manItems = [
		{ image: '/img/menu2.png', path: '#menu', title: 'TURTLENECK' },
		{ image: '/img/menu3.png', path: '#menu', title: 'POLO' },
		{ image: '/img/menu2.png', path: '#menu', title: 'TURTLENECK' }
	];
	return (
		<div className="App">
			<NavigationBar />
			<Header />
			<SubHeader />
			<Menu items={womenItems} title={'WOMEN'} />
			<Menu items={manItems} title={'MEN'} />
			<div>
				<p className="toget">TO GET and TO GIFT</p>
			</div>
			<div style={{ margin: '42px 273px' }} />
			<Footer />
		</div>
	);
}


export default App;
