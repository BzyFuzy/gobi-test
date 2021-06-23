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

			<div className="footer">
				<div style={{ padding: '62.01px 2px 64px 2.6px' }}>
					<div>
						<div>
							<p>ABOUT US</p>
							<ul>
								<li>
									<a>Our History</a>
								</li>
								<li>
									<a>Product Care</a>
								</li>
								<li>
									<a>Store Location</a>
								</li>
								<li>
									<a>Sustainability</a>
								</li>
							</ul>
						</div>
						<div>
							<p>POLICY</p>
							<ul>
								<li>
									<a>Shipping & Return Policy</a>
								</li>
								<li>
									<a>Privacy Policy</a>
								</li>
								<li>
									<a>Impressum</a>
								</li>
								<li>
									<a>Return Portal</a>
								</li>
							</ul>
						</div>

						<div>
							<p>CUSTOMER SERVICE</p>
							<ul>
								<li>
									<a>General Terms and Conditions</a>
								</li>
								<li>
									<a>Contact Us</a>
								</li>
								<li>
									<a>News</a>
								</li>
								<li>
									<a>FAQ</a>
								</li>
							</ul>
						</div>
					</div>
					<div />
				</div>
			</div>
		</div>
	);
}

export default App;
