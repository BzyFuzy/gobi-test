export const Footer = () => {
	const aboutUS = [
		{ link: '#ourhistory', title: 'Our History' },
		{ link: '#productcare', title: 'Product Care' },
		{ link: '#storelocation', title: 'Store Location' },
		{ link: '#sustainbility', title: 'Sustainability' }
	];

	const policy = [
		{ link: '#polshiping', title: 'Shipping & Return Policy' },
		{ link: '#pripo;', title: 'Privacy Policy' },
		{ link: '#impressum', title: 'Impressum' },
		{ link: '#returnportal', title: 'Return Portal' }
	];

	const gobiDiary = [
		{ link: '#blog', title: 'Blogs' },
		{ link: '#howweproduce;', title: 'How We Produce' },
		{ link: '#sustainability', title: 'Sustainability' },
		{ link: '#guide', title: 'Guide' }
	];

	const custumerService = [
		{ link: '#terms', title: 'General Terms and Conditions' },
		{ link: '#contactus', title: 'Contact Us' },
		{ link: '#news', title: 'News' },
		{ link: '#faq', title: 'FAQ' }
	];

	const followUS = [
		{
			link: '#facebook',
			className: 'facebook',
			title: null
		},
		{
			link: '#instagram',
			className: 'instagram',
			title: null
		},
		{
			link: '#twitter',
			className: 'twitter',
			title: null
		},
		{
			link: '#youtube',
			className: 'youtube',
			title: null
		}
	];

	return (
		<div className="footer">
			<div className="footerc">
				<div className="footerw">
					<div className="fmenucont">
						<FMenu items={aboutUS} title="ABOUT US" />
						<FMenu items={policy} title="POLICY" />
						<FMenu items={gobiDiary} title="GOBI DIARY" />
						<FMenu items={custumerService} title="CUSTOMER CARE" />
					</div>
					<PaymentIcons />
				</div>

				<div className="social">
					<FMenu items={followUS} title="Follow us" />
					<div className="global">
						<p>Global - English</p>
						<i className="earth" />
					</div>
				</div>
			</div>
			<p className="copyright">All content Copyright © 2020 GOBI Cashmere</p>
		</div>
	);
};

const FMenu = ({ items, title }) => (
	<div className="fmenu">
		<p>{title}</p>
		<ul>
			{items.map((item, i) => {
				return <FMenuItem key={title + 'FM' + i} item={item} />;
			})}
		</ul>
	</div>
);

const FMenuItem = ({ item }) => {
	if (item.title) {
		return (
			<li>
				<a className={item.className} href={item.link}>
					{item.title}
				</a>
			</li>
		);
	} else {
		return (
			<li>
				<i className={'icon ' + item.className} />
			</li>
		);
	}
};

const PaymentIcons = () => {
	const methods = [ 'amex', 'gpay', 'apple', 'klarna', 'maestro', 'master', 'paypal', 'sofort', 'spay', 'visa' ];

	return (
		<div className="payment">
			{methods.map((method, i) => (
				<i
					key={i + 'paymenticon'}
					className={'icon'}
					style={{
						backgroundSize: '100% 100%',
						background: `url(./img/payments/${method}.svg) 50% 50% no-repeat`
					}}
				/>
			))}
		</div>
	);
};
